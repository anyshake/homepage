---
sidebar_position: 2
title: Installing Observer
slug: installing-observer
---

Observer is distributed as a single executable with its web interface embedded. These instructions follow the **4.9.0** source and release workflow.

## Supported Platforms

| Platform | Release targets |
| --- | --- |
| Linux | 386, amd64, ARM v5/v6/v7, arm64, loong64, MIPS variants, ppc64le, riscv64, s390x |
| Windows | 386, amd64, arm64; separate Windows 7 builds for 386 and amd64 |
| macOS | amd64, arm64 |
| FreeBSD / OpenBSD | 386, amd64, ARM v5/v6/v7, arm64 |
| Android | arm64 |

The Docker workflow publishes Linux images for 386, amd64, ARM v6/v7, arm64, ppc64le, riscv64, and s390x. Optional services and database drivers can vary by target. We recommend at least 1 GB RAM and a dual-core CPU; helicorder plotting and long waveform queries need additional memory.

## One-command Installation on Linux

The [Observer installer](https://anyshake.org/get-observer.sh) supports Linux hosts running **systemd 240 or newer**. It requires root privileges, `curl`, `unzip`, `jq`, `sha256sum`, and the `getent`, `useradd`, and `groupadd` account tools. On Debian/Ubuntu, install prerequisites with:

```bash
sudo apt-get update
sudo apt-get install ca-certificates curl unzip jq coreutils passwd libc-bin
```

Generate `config.json` using [Configuration Tool](configuration-tool.md), then install:

```bash
curl -fsSL https://anyshake.org/get-observer.sh -o get-observer.sh
sudo sh get-observer.sh --config ./config.json
```

With an imported configuration, a new installation enables and starts `observer.service`. Use absolute paths for external database files and output directories. The service runs as `observer`, with `/var/lib/observer` as its working directory; that account must be able to access configured paths and the serial device.

To install first and configure later:

```bash
curl -fsSL https://anyshake.org/get-observer.sh | sudo sh
sudoedit /usr/local/etc/observer/config.json
sudo systemctl enable --now observer.service
```

Without `--config`, a new installation writes a starter configuration and leaves the service stopped. Set hardware endpoint, protocol, model, and coordinates before starting. This starter uses SQLite at `/var/lib/observer/observer.db`, logs to the journal, and listens on `127.0.0.1:8073`. Set `server.listen` to `0.0.0.0:8073` if LAN access is required.

| Option | Purpose |
| --- | --- |
| `--version v4.9.0` | Install a specific release; default: latest stable GitHub release. |
| `--arch linux_arm32_v7a` | Override detection with an exact Linux release target. Useful for MIPS or mixed kernel/userspace architectures. |
| `--config ./config.json` | Import configuration on first installation. Existing configuration is preserved; edit it directly for subsequent changes. |
| `--no-start` | Leave the service stopped after installation. |
| `--dry-run` | Print the plan without downloads or system changes. |
| `--help` | Show usage. |

The installer verifies the extracted executable's SHA-256 against the release `.dgst` before replacement. Existing installations retain configuration, database, and service output. A running managed service is stopped after verification, then restarted unless `--no-start` is set. The previous executable remains as a timestamped backup. If restarting fails during installation, the installer attempts to restore that executable. This does not reverse database migrations or guarantee continued process health; inspect the journal.

| Installed item | Path |
| --- | --- |
| Executable | `/usr/local/observer/bin/observer` |
| Configuration | `/usr/local/etc/observer/config.json` |
| Working directory and default data | `/var/lib/observer` |
| systemd unit | `/etc/systemd/system/observer.service` |

The service account can write to the executable directory to support built-in upgrades. The installer refuses to overwrite an unmanaged unit or executable installation. For existing manual installations, follow [Manual Upgrade and Recovery](upgrade-and-backup.md#manual-upgrade-and-recovery).

## Manual Installation

Download from [GitHub Releases](https://github.com/anyshake/observer/releases). Actual filenames include `windows_amd64.zip`, `windows7_amd64.zip`, `linux_arm32_v7a.zip`, and **`darwin_arm64_v8a.zip`** for Apple Silicon.

On Unix-like hosts, inspect `uname -m`: `x86_64` → `amd64`, `i686` → `386`, `armv6l` → `arm32_v6`, `armv7l` → `arm32_v7a`, and `aarch64` → `arm64_v8a`. Match both the CPU and operating system userspace. On Windows, inspect **Settings → System → About → System type**; Windows 7 needs the separate `windows7_` package.

### Verify the Executable

For `linux_amd64.zip`, download **`linux_amd64.dgst`** from the same release. The digest describes the executable inside the archive, not the ZIP:

```bash
unzip linux_amd64.zip -d observer-release
cat linux_amd64.dgst
sha256sum observer-release/observer
```

Compare against `SHA2-256=` in the digest. On macOS, use `shasum -a 256`; on Windows, use `Get-FileHash .\observer.exe -Algorithm SHA256` in PowerShell.

### Configuration and Paths

The archive contains `observer` (or `observer.exe`) and **`assets/`**, containing `config.json` and `observer.service`. Copy `assets/config.json` to a working configuration and edit it. The release example uses `/tmp/observer.db`; change this to persistent writable storage.

On Windows, place the executable and edited configuration in a writable application directory. One possible manual Linux layout is:

```bash
sudo install -m 0755 observer-release/observer /usr/local/bin/observer
sudo install -d /usr/local/etc/observer
sudo install -m 0600 config.json /usr/local/etc/observer/config.json
```

The running user must be able to read the configuration and write the database and output directories. Serial access commonly needs membership in `dialout` on Debian/Ubuntu or `uucp` on other distributions; inspect the device's group and log in again after adding membership.

The packaged unit is an example: its `ExecStart` points to `/usr/local/observer/bin/observer`. Adapt its paths, account, working directory, and writable directories before enabling it. The installer generates a matching unit automatically.

## Docker

Use a Linux Docker host for straightforward serial-device mapping. Configure these paths inside `config.json` first:

- `database.database`: `/data/observer.db`
- `hardware.endpoint`: `serial:///dev/ttyUSB0?baudrate=57600`, or your TCP endpoint
- `server.listen`: `0.0.0.0:8073`
- `logger.path`: `""` for container logs

```bash
mkdir -p observer-data
docker run -d \
    --name observer \
    --network host \
    --restart unless-stopped \
    --workdir /data \
    --device /dev/ttyUSB0:/dev/ttyUSB0 \
    --mount type=bind,src="$(pwd)/config.json",dst=/config.json,readonly \
    --mount type=bind,src="$(pwd)/observer-data",dst=/data \
    ghcr.io/anyshake/observer:latest \
    --config /config.json
```

The config file must exist before starting. Omit `--device` with TCP hardware transport. Relative service output paths resolve under `/data`, persisting with the database. Host networking exposes enabled listening ports on the host, including optional UDP services.

Upgrade by pulling the desired image tag and recreating the container with the same mounts. Back up data first. Manage container upgrades through Docker; Dockerfile builds do not expose the official binary updater.

## Build from Source

For source code and project information, start with the [Observer README on GitHub](https://github.com/anyshake/observer#readme). The steps below follow the 4.9.0 build workflow; check the repository for the requirements of the version you are building.

Use the Go version specified in `go.mod` (currently **1.27.1**), Node.js **24** as used by CI, npm, Git, and Make:

```bash
git clone https://github.com/anyshake/observer.git
cd observer/web/src
npm ci
npm run build
cd ../..
make build
```

The executable is written to `build/dist/observer`, with examples in `build/dist/assets/`. Build the web interface before Go because web assets are embedded. Self-built binaries do not expose the official updater. Continue with [Run Observer](run-observer.md).
