---
sidebar_position: 3
title: FRP Client Service
slug: frp-client
---

The embedded FRP client forwards the Observer **web interface** through an FRP server. Supply a compatible server, credentials, and domain or remote port; the defaults alone do not establish a public endpoint.

| Setting | Key | Default | Meaning |
| --- | --- | --- | --- |
| Enable | `enabled` | `false` | Start the tunnel. |
| Server Address / Port | `server_addr`, `server_port` | `anyshake.observer`, `443` | FRP server control endpoint. |
| Protocol | `protocol` | `wss` | `tcp`, `kcp`, `quic`, `websocket`, or `wss`. |
| Authentication Token | `token` | `anyshake.org` | Must match your server configuration. |
| User | `user` | Empty | Prefix used to distinguish proxies. |
| Proxy Name | `proxy_name` | `anyshake-observer-<random>` | Unique proxy identifier. |
| TLS Enable | `tls_enable` | `true` | Encrypt control traffic. |
| Disable Custom TLS First Byte | `disable_custom_tls_first_byte` | `true` | TLS compatibility option. |
| Key / Cert / Trusted CA File | `key_file`, `cert_file`, `trusted_ca_file` | Empty | Optional TLS files, readable by the process. |
| TLS Server Name | `tls_server_name` | Empty | Override certificate server name. |
| Connection Pool Count | `pool_count` | `5` | Exposed setting; current implementation uses a fixed pool of five. |
| TCP Multiplexing | `tcp_mux` | `true` | Reuse control transport connections. |
| Use Encryption / Compression | `use_encryption`, `use_compression` | `true`, `true` | Proxy traffic options. |
| Use Domain Access | `use_domain_access` | `true` | HTTP domain proxy; false selects TCP forwarding. |
| Subdomain | `subdomain` | `station-<random>` | Subdomain for domain access. |
| Custom Domains | `custom_domains` | `[]` | Custom hostnames for domain access. |
| Remote Outbound Port | `remote_outbound_port` | Random 30000–59999 | Server-side port in TCP mode. |

In domain mode, configure the FRP server's HTTP virtual-host routing and DNS for the selected subdomain or custom domain. In TCP mode, allow the configured remote port on the server. Configure HTTPS termination at your public endpoint; enabling FRP transport TLS does not automatically provide browser-facing HTTPS.

The local target comes from `server.listen`. Use a valid address the client can connect to, such as `127.0.0.1:8073`. This module does not publish SeedLink, Winston, or TCP Forwarder ports. Restart the service after saving changes and inspect connection logs if the endpoint is unavailable.
