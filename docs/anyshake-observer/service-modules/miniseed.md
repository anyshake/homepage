---
sidebar_position: 6
title: MiniSEED Service
slug: miniseed
---

MiniSEED writes incoming raw counts directly to daily, per-channel MiniSEED files. It operates independently of database Archiver and does not require a browser to remain open.

| Setting | Key | Default | Meaning |
| --- | --- | --- | --- |
| Enable | `enabled` | `false` | Enable file recording. |
| File Path | `file_path` | `./service_data/miniseed` | Output directory, created automatically. |
| Use Compression | `use_compression` | `false` | Use STEIM encoding instead of INT32. |
| Compression Scheme | `compress_scheme` | `steim-1` | `steim-1` or `steim-2` when compression is enabled. |
| Life Cycle | `life_cycle` | `0` | Retention in days; zero keeps files indefinitely. |

Files are grouped by UTC date (`YYYY-MM-DD`) with names such as `AS.SHAKE.00.EHZ.D.2026.001.mseed`: network, station, location, channel, quality, year, and day of year. The hidden `.miniseed_sequence` file maintains sequence state. Preserve the directory across container recreation and make it writable by the running account.

STEIM-2 cannot represent all possible differences from full-range 32-bit count data. Use uncompressed INT32 or STEIM-1 if full-scale signals could cause encoding overflow/checksum errors. Compression settings here do not change SeedLink compression.

Enable the service and restart it after saving settings. Recorded files appear in the web interface's download view. Metadata must be exported separately when instrument response is needed. File cleanup and database retention are independent; deleted MiniSEED files cannot be recovered from the download view.
