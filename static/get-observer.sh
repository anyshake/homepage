#!/bin/sh
# Install official AnyShake Observer Linux releases as a systemd service.
# Usage: curl -fsSL https://anyshake.org/get-observer.sh | sudo sh
set -eu

REPOSITORY=https://github.com/anyshake/observer
BIN_DIR=/usr/local/observer/bin
CONFIG_DIR=/usr/local/etc/observer
STATE_DIR=/var/lib/observer
UNIT=/etc/systemd/system/observer.service
SERVICE_USER=observer
LOCK_DIR=/run/lock/anyshake-observer-install.lock
MANAGED_MARKER='# Managed by https://anyshake.org/get-observer.sh'

version=latest
target=
config_source=
no_start=0
dry_run=0
work_dir=
staged_binary=
backup_binary=
locked=0
was_active=0
stopped=0
replaced=0
start_attempted=0
enabled_new=0

log() { printf '%s\n' "$*"; }
die() { printf 'Error: %s\n' "$*" >&2; exit 1; }

usage() {
    cat <<'EOF'
Install AnyShake Observer on Linux with systemd.

Usage: sh get-observer.sh [options]
  --version VERSION   Release tag (e.g. v4.9.0); default: latest stable
  --arch TARGET       Exact Linux target (e.g. linux_arm32_v7a)
  --config FILE       Import JSON configuration on first installation only
  --no-start          Leave the service stopped after installation
  --dry-run           Show the plan without network access or system changes
  --help              Show this help

Requires root, systemd 240+, curl, unzip, jq, sha256sum, and account tools.
Existing configuration, data, and managed systemd units are preserved.
Without --config, a new installation writes a starter config and stays stopped.
Documentation: https://anyshake.org/docs/installing-observer
EOF
}

parse_args() {
    while [ "$#" -gt 0 ]; do
        case "$1" in
            --version|--arch|--config)
                [ "$#" -ge 2 ] && [ -n "$2" ] || die "Missing value for $1"
                case "$2" in --*) die "Missing value for $1" ;; esac
                case "$1" in
                    --version) version=$2 ;;
                    --arch) target=$2 ;;
                    --config) config_source=$2 ;;
                esac
                shift 2
                ;;
            --no-start) no_start=1; shift ;;
            --dry-run) dry_run=1; shift ;;
            --help|-h) usage; exit 0 ;;
            *) die "Unknown option: $1 (see --help)" ;;
        esac
    done
    if [ "$version" != latest ]; then
        version=v${version#v}
        validate_version
    fi
}

validate_version() {
    printf '%s\n' "$version" | LC_ALL=C grep -Eq '^v[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z]+([.-][0-9A-Za-z]+)*)?$' ||
        die "Invalid release tag: $version"
}

detect_target() {
    [ "$(uname -s)" = Linux ] || die 'This installer requires Linux. Use a release ZIP on other platforms.'
    if [ -z "$target" ]; then
        machine=$(uname -m)
        bits=$(getconf LONG_BIT 2>/dev/null || true)
        case "$machine" in
            x86_64|amd64)
                if [ "$bits" = 32 ]; then target=linux_386; else target=linux_amd64; fi ;;
            i386|i486|i586|i686) target=linux_386 ;;
            aarch64|arm64)
                [ "$bits" != 32 ] || die '32-bit ARM userspace on a 64-bit kernel: specify --arch for your userspace.'
                target=linux_arm64_v8a ;;
            armv5*) target=linux_arm32_v5 ;;
            armv6*) target=linux_arm32_v6 ;;
            armv7*|armv8l) target=linux_arm32_v7a ;;
            loongarch64) target=linux_loong64 ;;
            ppc64le) target=linux_ppc64le ;;
            riscv64) target=linux_riscv64 ;;
            s390x) target=linux_s390x ;;
            mips*) die 'Specify --arch with the correct MIPS endianness and floating-point target.' ;;
            *) die "Unsupported architecture: $machine; use a matching release manually." ;;
        esac
    fi
    case "$target" in
        linux_386|linux_amd64|linux_arm32_v5|linux_arm32_v6|linux_arm32_v7a|linux_arm64_v8a|linux_loong64|linux_ppc64le|linux_riscv64|linux_s390x|linux_mips|linux_mips_softfloat|linux_mipsle|linux_mipsle_softfloat|linux_mips64|linux_mips64_softfloat|linux_mips64le|linux_mips64le_softfloat) ;;
        *) die "Unknown Linux release target: $target" ;;
    esac
}

cleanup() {
    result=$?
    trap - 0 HUP INT TERM
    set +e
    if [ "$result" -ne 0 ] && [ "$start_attempted" -eq 1 ]; then
        systemctl stop observer.service
        if [ "$enabled_new" -eq 1 ]; then systemctl disable observer.service; fi
    fi
    if [ "$result" -ne 0 ] && [ "$stopped" -eq 1 ]; then
        if [ "$replaced" -eq 1 ] && [ -n "$backup_binary" ]; then
            log 'Installation failed; attempting to restore the previous executable.' >&2
            systemctl stop observer.service
            rollback_file=$(mktemp "$BIN_DIR/.observer-rollback.XXXXXXXX")
            if [ -n "$rollback_file" ] && cp -p "$backup_binary" "$rollback_file" &&
                mv -f "$rollback_file" "$BIN_DIR/observer"; then
                log "Restored executable from $backup_binary" >&2
            else
                log "Restore failed. Recover manually from $backup_binary before starting Observer." >&2
                rm -f "$rollback_file"
                was_active=0
            fi
        fi
        if [ "$was_active" -eq 1 ]; then
            systemctl start observer.service || log 'Previous service could not be restarted; inspect the journal.' >&2
        fi
    fi
    [ -z "$staged_binary" ] || rm -f "$staged_binary"
    [ -z "$work_dir" ] || rm -rf "$work_dir"
    [ "$locked" -eq 0 ] || rmdir "$LOCK_DIR"
    exit "$result"
}

preflight() {
    [ "$(id -u)" -eq 0 ] || die 'Run with sudo sh get-observer.sh, or as root.'
    for dependency in systemctl curl unzip jq sha256sum awk grep mktemp install getent useradd groupadd; do
        command -v "$dependency" >/dev/null 2>&1 || die "Missing dependency: $dependency. Install prerequisites from the documentation."
    done
    [ -d /run/systemd/system ] || die 'systemd must be running as the host service manager.'
    systemd_version=$(systemctl --version | awk 'NR == 1 {print $2}')
    case "$systemd_version" in ''|*[!0-9]*) die 'Cannot determine the systemd version.' ;; esac
    [ "$systemd_version" -ge 240 ] || die 'systemd 240 or newer is required by the generated unit.'
    if [ -L "$UNIT" ]; then
        die "Refusing to replace a symlinked unit: $UNIT"
    fi
    if [ -f "$UNIT" ]; then
        grep -Fqx "$MANAGED_MARKER" "$UNIT" || die "Unmanaged unit exists at $UNIT; use the manual upgrade procedure."
    else
        fragment=$(systemctl show -p FragmentPath --value observer.service 2>/dev/null || true)
        [ -z "$fragment" ] || die "An existing unit is loaded from $fragment; use the manual upgrade procedure."
        if [ -e "$BIN_DIR/observer" ] || [ -L "$BIN_DIR/observer" ]; then
            die "An unmanaged executable exists at $BIN_DIR/observer; use the manual upgrade procedure."
        fi
    fi
    if [ -n "$config_source" ]; then
        [ -f "$config_source" ] && [ -r "$config_source" ] || die "Cannot read configuration: $config_source"
        [ ! -e "$CONFIG_DIR/config.json" ] && [ ! -L "$CONFIG_DIR/config.json" ] ||
            die "Configuration already exists at $CONFIG_DIR/config.json. Edit it directly; --config never overwrites it."
        jq -e -s 'length == 1 and (.[0] | type == "object")' < "$config_source" >/dev/null ||
            die 'Configuration must contain exactly one JSON object.'
    fi
    if getent passwd "$SERVICE_USER" >/dev/null; then
        [ "$(id -u "$SERVICE_USER")" -ne 0 ] || die 'The observer account must not have UID 0.'
        account_dir=$(getent passwd "$SERVICE_USER" | awk -F: '{print $6}')
        [ "$account_dir" = "$STATE_DIR" ] && [ "$(id -gn "$SERVICE_USER")" = "$SERVICE_USER" ] ||
            die 'An unrelated observer account exists; use a manual installation with an appropriate account.'
    fi
}

fetch() {
    curl --fail --show-error --silent --location \
        --proto '=https' --proto-redir '=https' --tlsv1.2 \
        --connect-timeout 15 --max-time 600 --retry 3 \
        --output "$2" "$1"
}

prepare_release() {
    work_dir=$(mktemp -d /tmp/anyshake-observer.XXXXXXXX)
    if [ "$version" = latest ]; then
        release_url=$(curl --fail --show-error --silent --location \
            --proto '=https' --proto-redir '=https' --tlsv1.2 \
            --connect-timeout 15 --max-time 120 --retry 3 \
            --output /dev/null --write-out '%{url_effective}' "$REPOSITORY/releases/latest")
        version=${release_url##*/}
        validate_version
    fi
    log "Downloading Observer $version ($target)..."
    fetch "$REPOSITORY/releases/download/$version/$target.zip" "$work_dir/release.zip"
    fetch "$REPOSITORY/releases/download/$version/$target.dgst" "$work_dir/release.dgst"
    # Extract only known members, never arbitrary paths from an archive.
    unzip -p "$work_dir/release.zip" observer > "$work_dir/observer"
    [ -s "$work_dir/observer" ] || die 'Release archive contains no executable.'
    expected=$(LC_ALL=C awk -F= '
        $1 ~ /^SHA2-256[[:space:]]*$/ {
            value=$2; gsub(/[[:space:]]/, "", value); count++
        }
        END {
            if (count != 1 || length(value) != 64 || value ~ /[^0-9a-fA-F]/) exit 1
            print tolower(value)
        }' "$work_dir/release.dgst") || die 'Missing or invalid SHA2-256 release digest.'
    actual=$(sha256sum "$work_dir/observer" | awk '{print $1}')
    [ "$expected" = "$actual" ] || die 'Executable SHA-256 verification failed; installed files have not been changed.'
    log 'Executable SHA-256 verified.'

    if [ ! -e "$CONFIG_DIR/config.json" ] && [ ! -L "$CONFIG_DIR/config.json" ]; then
        if [ -n "$config_source" ]; then
            cp "$config_source" "$work_dir/config.json"
        else
            unzip -p "$work_dir/release.zip" assets/config.json > "$work_dir/release-config.json"
            jq -e '
                .location = {latitude: 0, longitude: 0, elevation: 0} |
                .database = {endpoint: "sqlite://", username: "", password: "",
                    database: "/var/lib/observer/observer.db", prefix: "as_", timeout: 5} |
                .server = {listen: "127.0.0.1:8073", debug: false, cors: false} |
                .logger.path = ""
            ' "$work_dir/release-config.json" > "$work_dir/config.json"
        fi
    fi
}

setup_account_and_unit() {
    if ! getent group "$SERVICE_USER" >/dev/null; then
        groupadd --system "$SERVICE_USER"
    fi
    if ! getent passwd "$SERVICE_USER" >/dev/null; then
        login_shell=$(command -v nologin || printf '%s' /bin/false)
        useradd --system --gid "$SERVICE_USER" --home-dir "$STATE_DIR" \
            --no-create-home --shell "$login_shell" "$SERVICE_USER"
    fi
    install -d -m 0755 /usr/local/observer
    install -d -o "$SERVICE_USER" -g "$SERVICE_USER" -m 0755 "$BIN_DIR"
    install -d -o root -g "$SERVICE_USER" -m 0750 "$CONFIG_DIR"
    install -d -o "$SERVICE_USER" -g "$SERVICE_USER" -m 0750 "$STATE_DIR"
    if [ -f "$work_dir/config.json" ]; then
        install -o root -g "$SERVICE_USER" -m 0640 "$work_dir/config.json" "$CONFIG_DIR/config.json"
    fi
    # Preserve administrator changes to a managed unit on subsequent runs.
    if [ ! -f "$UNIT" ]; then
        serial_groups=
        for serial_group in dialout uucp; do
            if getent group "$serial_group" >/dev/null; then
                serial_groups="$serial_groups $serial_group"
            fi
        done
        cat > "$work_dir/observer.service" <<EOF
$MANAGED_MARKER
[Unit]
Description=AnyShake Observer
Wants=network-online.target
After=network-online.target

[Service]
Type=exec
User=$SERVICE_USER
Group=$SERVICE_USER
SupplementaryGroups=$serial_groups
WorkingDirectory=$STATE_DIR
ExecStart=$BIN_DIR/observer -config $CONFIG_DIR/config.json
Restart=on-failure
RestartSec=5s
TimeoutStopSec=60s
UMask=0027
AmbientCapabilities=CAP_NET_BIND_SERVICE
CapabilityBoundingSet=CAP_NET_BIND_SERVICE
NoNewPrivileges=true
ProtectSystem=strict
ProtectHome=true
PrivateTmp=true
ProtectKernelTunables=true
ProtectKernelModules=true
ProtectControlGroups=true
RestrictSUIDSGID=true
ReadWritePaths=$BIN_DIR $STATE_DIR

[Install]
WantedBy=multi-user.target
EOF
        install -o root -g root -m 0644 "$work_dir/observer.service" "$UNIT"
        systemctl daemon-reload
    fi
}

install_release() {
    first_install=1
    [ ! -f "$BIN_DIR/observer" ] || first_install=0
    if systemctl is-active --quiet observer.service; then was_active=1; fi
    setup_account_and_unit
    staged_binary=$(mktemp "$BIN_DIR/.observer-install.XXXXXXXX")
    install -o "$SERVICE_USER" -g "$SERVICE_USER" -m 0755 "$work_dir/observer" "$staged_binary"
    if [ "$first_install" -eq 0 ]; then
        backup_binary="$BIN_DIR/observer.$(date -u +%Y%m%d%H%M%S)"
        [ ! -e "$backup_binary" ] || die "Backup already exists: $backup_binary; retry later."
    fi
    if [ "$was_active" -eq 1 ]; then
        stopped=1
        systemctl stop observer.service
    fi
    if [ "$first_install" -eq 0 ]; then
        cp -p "$BIN_DIR/observer" "$backup_binary"
    fi
    mv -f "$staged_binary" "$BIN_DIR/observer"
    staged_binary=
    replaced=1

    should_start=$was_active
    if [ "$first_install" -eq 1 ] && [ -n "$config_source" ] && [ "$no_start" -eq 0 ]; then
        systemctl enable observer.service
        enabled_new=1
        should_start=1
    fi
    if [ "$no_start" -eq 1 ]; then should_start=0; fi
    if [ "$should_start" -eq 1 ]; then
        start_attempted=1
        if ! systemctl start observer.service || ! systemctl is-active --quiet observer.service; then
            die 'Service failed to start. Inspect: sudo journalctl -u observer.service -n 100 --no-pager'
        fi
        log 'Service started. Check the journal to confirm hardware initialization and web access.'
    else
        log "Service is stopped. Review $CONFIG_DIR/config.json, then run:"
        log '  sudo systemctl enable --now observer.service'
    fi
    replaced=0
    stopped=0
    log "Installed Observer $version ($target) at $BIN_DIR/observer"
    [ -z "$backup_binary" ] || log "Previous executable: $backup_binary"
    log 'Logs: sudo journalctl -u observer.service -f'
}

main() {
    parse_args "$@"
    detect_target
    if [ "$dry_run" -eq 1 ]; then
        log "Release: $version; target: $target"
        log 'Download the release ZIP and digest over HTTPS; verify the extracted executable with SHA-256.'
        log "Executable: $BIN_DIR/observer; config: $CONFIG_DIR/config.json"
        log "Account: $SERVICE_USER; working directory: $STATE_DIR; unit: $UNIT"
        log 'Preserve existing configuration, data, and managed unit; refuse unmanaged installations.'
        if [ -n "$config_source" ]; then log "Import configuration on first install: $config_source"; fi
        if [ "$no_start" -eq 1 ]; then
            log 'Leave the service stopped.'
        else
            log 'Restart an active service; start a new installation only with --config.'
        fi
        return
    fi
    preflight
    trap cleanup 0
    trap 'exit 129' HUP
    trap 'exit 130' INT
    trap 'exit 143' TERM
    mkdir -p /run/lock
    mkdir "$LOCK_DIR" 2>/dev/null || die "Another installation holds $LOCK_DIR. If interrupted, confirm no installer is running before removing the lock."
    locked=1
    prepare_release
    install_release
}

# Read the entire script before invoking main, including when piped into sh.
main "$@"
