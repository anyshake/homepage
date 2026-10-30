---
sidebar_position: 14
title: Tailscale Service
slug: tailscale
---

Observer embeds a userspace Tailscale node for private access through Tailscale or Headscale. A separate host `tailscaled` daemon is not required for this module.

| Setting | Key | Default | Meaning |
| --- | --- | --- | --- |
| Enable | `enabled` | `false` | Connect the embedded node. |
| Hostname | `hostname` | `anyshake-observer-<random>` | Node name in the tailnet. |
| Control URL | `control_url` | `https://controlplane.tailscale.com` | Coordination server; replace for Headscale. |
| Auth Key | `auth_key` | Empty | Required for first enrollment; ignored when a saved identity exists. |
| Forward Ports | `forward_ports` | `[]` | Additional local services, e.g. `18000/tcp`, `30000/tcp`, `123/udp`. |

The web listener is always forwarded over TCP at its configured port, including when bound to loopback. Additional forwarding targets local services; start each target separately. TCP and UDP are explicit and independent, so use `123/udp` for NTP. Restart the module after changing forwards.

Create an enrollment key in your coordination server, enter it in Settings, enable the module, and start it. Initial registration without a key is rejected. If enrollment fails, check key validity, coordination-server reachability, and service logs. Locate the embedded node in the tailnet administration console and connect to its tailnet IP or MagicDNS name, for example `http://<node-ip>:8073`.

Node identity is persisted in Observer's database, so retain it across upgrades and container recreation. A settings JSON export alone does not preserve that identity. An existing identity takes precedence over the enrollment key. Tailnet access rules and Observer's own web login both remain relevant. This module forwards selected services; it does not make the entire host a subnet router.

See [Access Services Using Tailscale](../../applications/access-using-tailscale.md) for client installation and the alternative host-daemon setup.
