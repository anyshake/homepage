---
sidebar_position: 2
---

# Serial Baud Rate

In serial communication, the baud rate determines the speed at which data is transmitted between devices. The baud rate is measured in bits per second (bps). The higher the baud rate, the faster the data is transmitted. The baud rate is set to 115200 bps by default in AnyShake Explorer.

In AnyShake Explorer, you can change it in the header file `include/settings.h`:

```cpp
#define EXPLORER_BAUDRATE 115200
```

**Please note that the baud rate of AnyShake Explorer and AnyShake Observer must be the same.**
