---
sidebar_position: 2
title: Archiver Service
slug: archiver
---

Archiver stores incoming waveform packets in the configured database. It supplies History queries, history exports, helicorder plotting, and database-backed protocol requests.

| Setting | Key | Default | Meaning |
| --- | --- | --- | --- |
| Enable Archiver | `enabled` | `true` | Record new waveform data. |
| Data Rotation | `rotation` | `0` | Days of database waveform history to retain; zero keeps records indefinitely. |

Records are inserted in batches of ten one-second packets, so the newest seconds may not appear immediately in database queries. Cleanup is scheduled periodically while data arrives, rather than exactly at midnight. Select retention based on available storage and the period needed for analysis.

Disabling Archiver stops new database recording; it does not remove existing history or disable live waveforms. Historical requests can still read retained records. Daily [MiniSEED](miniseed.md) files are independent and use their own retention setting. Database cleanup does not necessarily shrink the physical database file immediately.

Enable Archiver and retain at least the plotted day when using [Helicorder](helicorder.md). Back up the database before using administrative purge controls; purging is distinct from changing future retention.
