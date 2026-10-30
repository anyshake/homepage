---
sidebar_position: 4
title: Helicorder Service
slug: helicorder
---

Helicorder renders daily per-channel waveform plots from **database history**. Enable [Archiver](archiver.md) first and retain enough data for the plotted day. Existing MiniSEED files are not used as its data source.

| Setting | Key | Default | Meaning |
| --- | --- | --- | --- |
| Enable | `enabled` | `false` | Enable plot generation. |
| File Path | `file_path` | `./service_data/helicorder` | Image output directory. |
| Cache Storage | `cache_storage` | `disk` | `disk`, `memory`, or `disabled`. |
| Cache Path | `cache_path` | `./service_data/helicorder/.helicorder-cache` | Temporary disk cache. |
| Image Format | `image_format` | `svg` | `svg` or `png`. |
| Time Span | `time_span` | `15` | Minutes per row: 10, 15, or 30. |
| Life Cycle | `life_cycle` | `0` | Image retention in days; zero keeps indefinitely. |
| Image Size | `image_size` | `800` | Rendered image size in pixels. |
| Span Samples | `span_samples` | `10000` | Plot points per row. |
| Line Width | `line_width` | `1.0` | Waveform line width. |
| Scale Factors | `sacle_factors` | `[500, 500, 500, 30000000, 30000000, 30000000]` | Per-channel amplitude scaling in configured channel order. |

The persisted key **`sacle_factors`** and the UI label “Sacle Factors” retain the source spelling. A zero or missing factor skips that channel; a larger factor draws larger amplitudes. Add factors for additional channels if needed.

The first plotting pass starts approximately one minute after service startup, then plotting follows hourly boundaries. Images use UTC date directories and station/channel identifiers and are refreshed during the day. Download generated images through the web interface.

Disk caching reduces repeated database decoding with moderate memory use. Memory caching can be faster but raises RAM requirements; disabled caching minimizes retained cache memory. Lower image size or span samples on small hosts. Output and cache directories must be writable. Image retention is independent of database retention.
