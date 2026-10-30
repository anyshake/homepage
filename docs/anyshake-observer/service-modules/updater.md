---
sidebar_position: 11
title: Updater Service
slug: updater
---

Updater checks and installs official Observer releases. It is registered only for **official non-prerelease binaries** built with the `github-actions-ci` channel. A missing module on a self-built, snapshot, or Dockerfile build is expected.

| Setting | Key | Default | Meaning |
| --- | --- | --- | --- |
| Enable | `enabled` | `false` | Enable automatic update checks every six hours. |
| Release Fetch URL | `release_fetch_url` | GitHub release template below | Source for release ZIP and digest files. |
| Auto Restart | `auto_restart` | `false` | Restart after a successful automatic upgrade. |

```text
https://github.com/anyshake/observer/releases/download/{{.Version}}/{{.ToolchainName}}.{{.Extension}}
```

The template must serve both `.zip` and `.dgst` for the same release and target. Version discovery uses DNS metadata at `observer.updates.anyshake.org`; downloads use HTTPS. Check both network paths when diagnosing failures.

Automatic checks start on the six-hour interval. With Auto Restart disabled, the executable is replaced after verification, but the running process continues using its loaded version until restart. Manual upgrades from **Settings → About Software** work even when automatic updates are disabled or stopped, refresh the version check, report progress, and restart after success regardless of Auto Restart.

Eligibility also depends on the minimum required release reported by update metadata. If the current release is too old for automatic migration, install a supported release manually rather than bypassing that requirement.

The updater requires SHA-256 verification of the extracted executable and write permission in its directory. Unix upgrades retain the previous binary as `observer.YYYYMMDDhhmmss`. Administrators can list and remove executable backups in Settings. Database files and waveform archives are not included in those backups.

Back up the database before upgrading; replacing a binary cannot undo schema migrations. See [Upgrade and Backup](../upgrade-and-backup.md) for manual upgrades and recovery, or [Docker](../installing-observer.md#docker) for container upgrades.
