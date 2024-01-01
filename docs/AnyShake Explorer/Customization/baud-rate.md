---
sidebar_position: 1
---

# Serial Baud Rate

In serial communication, the baud rate determines the speed at which data is transmitted between devices. The baud rate is measured in bits per second (bps). The higher the baud rate, the faster the data is transmitted. The baud rate is set to 19200 bps by default in AnyShake Explorer.

In AnyShake Explorer, you can change it in the header file `include/settings.hpp`:

```cpp
#define MCU_UART_RATE 19200
```

Recommend values are `19200`, `38400`, `57600`, `115200`. Higher baud rates will bring higher sampling rate, the recommend sampling rate is 50 - 250 Hz, you can test them and find the best baud rate for your device.

**Please note that the baud rate of AnyShake Explorer and AnyShake Observer must be the same.**
