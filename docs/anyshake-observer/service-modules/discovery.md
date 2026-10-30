---
sidebar_position: 13
title: mDNS Discovery Service
slug: discovery
---

Discovery advertises Observer services on the local network using multicast DNS/DNS-SD.

| Setting | Key | Default | Meaning |
| --- | --- | --- | --- |
| Enable | `enabled` | `true` | Advertise local services. |
| Instance Name | `instance_name` | `anyshake-observer-<random>` | Unique station instance name. |
| Register SeedLink | `register_seedlink` | `true` | Advertise a running SeedLink listener. |
| Register Winston | `register_winston` | `true` | Advertise a running Winston listener. |
| Register TCP Forwarder | `register_forwarder` | `true` | Advertise a running TCP Forwarder listener. |

The HTTP listener is advertised as `_http._tcp`; optional services use `_seedlink._tcp`, `_winston._tcp`, and `_forwarder._tcp` in the `local.` domain. Registrations are refreshed as services start, stop, or change ports.

Clients need multicast reachability, normally UDP 5353 on the same LAN. Multicast may be blocked by guest Wi-Fi, VLANs, containers, or routers. Advertising does not change a localhost-only listener into a remotely reachable one and does not publish an internet hostname. Configure service binding and firewall access separately.
