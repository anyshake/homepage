---
sidebar_position: 9
title: SeedLink Service
slug: seedlink
---

Observer includes a native SeedLink server for clients such as Swarm, ObsPy, and SeisComP. A separate RingServer process is not required.

| Setting | Key | Default | Meaning |
| --- | --- | --- | --- |
| Enable | `enabled` | `true` | Enable SeedLink. |
| Listen Host | `listen_host` | `localhost` | Bind address. |
| Listen Port | `listen_port` | `18000` | TCP port. |
| Use Compression | `use_compression` | `false` | Compress outgoing MiniSEED records. |
| Compression Scheme | `compress_scheme` | `steim-1` | `steim-1` or `steim-2`. |

Configure the client with the Observer host, TCP port, and station/channel codes from Station Settings. Local clients can connect to `localhost:18000`. For another host, change the binding to a reachable interface and allow the port through the firewall, or use [Tailscale](tailscale.md).

Live streaming does not require database Archiver. Time-based history requests read retained database records and merge a short recent in-memory tail; enable [Archiver](archiver.md) for reliable historical access. The current history request window is at most one hour. MiniSEED archive files are not the history source.

Uncompressed INT32 is the default. STEIM-2 can overflow for full-range 32-bit signal differences; use STEIM-1 or INT32 where necessary. SeedLink settings are independent of the daily MiniSEED writer.

The listener does not use web-login authentication. Keep access limited to intended clients.
