---
sidebar_position: 15
title: Winston Service
slug: winston
---

Winston exposes a Winston/Earthworm-compatible waveform server, implemented with the project's Go protocol library. It can serve clients that need this protocol without running a separate Winston database server.

| Setting | Key | Default | Meaning |
| --- | --- | --- | --- |
| Enable | `enabled` | `false` | Enable Winston serving. |
| Listen Host | `listen_host` | `localhost` | Bind address. |
| Listen Port | `listen_port` | `16022` | TCP port. |
| Buffer Size | `buffer_size` | `600` | Recent waveform buffer in seconds. |

Recent queries use an in-memory buffer; requests not covered by that buffer fall back to retained database records. Enable [Archiver](archiver.md) for older history. A single request is limited to the database query window, currently one hour. Increasing Buffer Size increases memory use and does not replace persistent archiving.

Configure client network/station/location/channel identifiers to match Station Settings. Change the binding for remote clients only when needed and restrict access; this protocol does not use Observer's web-login authentication.
