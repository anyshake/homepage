---
sidebar_position: 5
title: Metrics Service
slug: metrics
---

Metrics sends diagnostic telemetry to `metrics.anyshake.org` using OpenTelemetry over HTTPS. It is **enabled by default** and reports on a ten-minute interval after a connectivity check.

| Setting | Key | Default | Meaning |
| --- | --- | --- | --- |
| Enable | `enabled` | `true` | Allow diagnostic reporting. |

Reported attributes include software version/build information, host platform information and an MD5-hashed hostname, process elapsed time and clocks, system uptime and CPU/memory/disk utilization, and hardware model, device ID, sample rate, channel codes, protocol, GNSS availability, and frame/message/error counters. Device IDs are included; do not interpret telemetry as containing no identifiers. Waveform samples and configured station coordinates are not part of this reporting payload.

To stop telemetry, disable the service in Settings and stop it if running. The saved switch prevents automatic startup on subsequent launches. Local recording and viewing do not depend on Metrics. Network failures are logged and do not supply a substitute for local system monitoring.
