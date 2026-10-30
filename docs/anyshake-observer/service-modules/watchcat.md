---
sidebar_position: 12
title: WatchCat Service
slug: watchcat
---

WatchCat monitors hardware progress every **30 seconds**. If the device's last-update timestamp has not advanced since the previous check, it logs a warning and asks the hardware transport to flush.

It is always enabled at application startup and has no configuration fields. Administrators can inspect its service status and logs. Repeated flush warnings indicate a stalled stream: investigate power, cabling, serial settings, protocol, and competing applications opening the same port.

WatchCat does not reboot the host or act as a general process supervisor. A fatal hardware connection failure can cause Observer to exit; use systemd or a container restart policy to restart the process after addressing the underlying connection issue.
