---
sidebar_position: 3
title: Serve as Stratum 1 NTP Server
slug: server-as-ntp-server
---

Observer can share its internal time source through the [NTP Server Service](../anyshake-observer/service-modules/ntp-server.md). Use this for trusted LAN clients when the Explorer has a verified GNSS time source.

## Prepare the Station

1. Connect the Explorer and verify GNSS time availability in the dashboard. Allow the receiver to acquire a stable fix.
2. Keep the NTP client pool in `config.json` configured for startup and fallback synchronization.
3. Check that no existing NTP daemon is listening on UDP 123. On Linux, inspect `sudo ss -lunp` before enabling another server.
4. If running as an unprivileged Linux user, grant `CAP_NET_BIND_SERVICE` through the service unit. The Observer installer already configures this capability.

The NTP server does not synchronize the host operating system clock. It serves Observer's own time source. Avoid creating a synchronization loop where the host and Observer rely on each other as their only reference.

## Enable Serving

In **Settings → Service Modules → NTP Server**, enable the service, select the intended LAN binding, and leave Listen Port at `123` for standard clients. Save and restart the module. Permit inbound UDP 123 from the intended LAN clients.

For example, to serve from a host at `192.168.1.20`, configure a client to use that address. If you administer a Linux client using chrony, add a source to its configuration:

```text
server 192.168.1.20 iburst
```

Reload or restart the client's time service using its normal administration procedure. On that client, `chronyc sources -v` and `chronyc tracking` can show source selection and measured offsets. Compare against another independent trusted reference while evaluating accuracy.

## Timing Limits

Observer currently advertises **stratum 1** and reference ID **GNSS** unconditionally. Those fields do not prove the receiver is currently locked. If GNSS is unavailable and Observer uses NTP fallback, it still advertises the same values. Monitor actual GNSS status instead of inferring it from NTP response labels.

USB and serial buffering can create a systematic offset. Delay Control adds a signed correction in **microseconds** to the served clock. Derive the sign and magnitude from measurements; there is no universal correction value. Software timestamps, scheduling, and network path asymmetry limit accuracy even with GNSS.

For private remote access, the embedded [Tailscale Service](../anyshake-observer/service-modules/tailscale.md) can forward `123/udp`. Consider VPN latency when evaluating precision. Keep the service limited to intended clients.
