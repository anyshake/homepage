---
sidebar_position: 2
---

# Channel Packet Length

In AnyShake Explorer, the channel packet length means the number of samples in each channel. The default value is `4`, which means the firmware will collect 4 samples from each channel and send them to AnyShake Explorer at once.

You can change the channel packet length in the header file `include/settings.hpp`:

```cpp
#define PACKET_SIZE 4
```

**Please note that the channel packet length of AnyShake Explorer and AnyShake Observer must be the same.**
