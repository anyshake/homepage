---
sidebar_position: 5
title: Upgrade and Backup
slug: upgrade-and-backup
---

## Settings Export and Restore

Administrators can use **Settings → Backup** to export station and service settings as JSON and import them on another installation. This file is separate from the base `config.json`; it does not contain waveform recordings, user accounts, FDSN access keys, or a complete database backup. It can include service credentials, so store it securely. Restart Observer after importing to refresh hardware and service settings.

## Built-in Upgrade

In **Settings → About Software**, administrators can check for and apply an eligible official release. Manual upgrades work even when the automatic updater is stopped and restart the application after successful installation. Progress notifications are visible to administrators. Other users can view software and third-party license information.

The updater is available only in official, non-prerelease builds with the `github-actions-ci` channel. The process needs write access to the executable directory and network access to update endpoints. Self-built and Dockerfile builds require an external upgrade. See [Updater Service](service-modules/updater.md).

## Installer Upgrade

Re-run the Linux installer for the latest stable release or a pinned version:

```bash
sudo sh get-observer.sh --version v4.9.0
```

It preserves configuration and data and restarts a previously running managed service. A stopped service stays stopped. Use `--no-start` to leave the service stopped after replacement. The installer does not manage a different, manually created unit.

## Manual Upgrade and Recovery

1. Stop Observer gracefully.
2. Back up `config.json`, the database, and service output. For SQLite, copy after stopping the process and preserve any remaining WAL files with the database. Use server backup tools for remote databases.
3. Download the target release and verify the extracted executable against its `.dgst`.
4. Keep the old executable, replace it with the verified version, preserve execution permissions, then start Observer and inspect logs.

Startup can migrate the database. An executable backup alone cannot restore a deployment after a database format change; recovery may require the matching database backup.

Administrators can list and remove timestamped executable backups from Settings. These are separate from database and waveform backups. Keep a known working executable and corresponding database backup before removing older files.
