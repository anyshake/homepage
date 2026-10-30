---
sidebar_position: 10
title: TCP Forwarder Service
slug: tcp-forwarder
---

TCP Forwarder supplies a text waveform stream to [AnyShake Nexus](../../anyshake-nexus/plugin-overview.md) or custom consumers. It is a separate protocol from SeedLink and Winston.

| Setting | Key | Default | Meaning |
| --- | --- | --- | --- |
| Enable | `enabled` | `true` | Enable forwarding. |
| Listen Host | `listen_host` | `localhost` | Bind address. |
| Listen Port | `listen_port` | `30000` | TCP port. |

A new client receives normal one-second events. Each channel is emitted as a CRLF-terminated line:

```text
$channel_id,network,station,location,channel,timestamp_ms,sample_rate,sample_1,...,sample_N,*XX\r\n
```

Samples are signed integer counts, timestamp is Unix milliseconds, and `XX` is the two-digit hexadecimal XOR of the bytes of all int32 samples. The current implementation computes this from native int32 memory, so custom clients must account for the server's byte order.

Send the exact command `AT+REALTIME=1\r\n` to switch to lower-latency realtime events, or `AT+REALTIME=0\r\n` to return to normal events. The command terminators represent actual CR and LF bytes. Read continuously; slow clients are disconnected to bound buffering. The stream has no historical replay.

For remote clients, change the binding to an appropriate interface and restrict access with a firewall or private VPN. Connections do not use Observer web-login authentication. Prefer SeedLink for clients expecting a standard seismic streaming protocol.
