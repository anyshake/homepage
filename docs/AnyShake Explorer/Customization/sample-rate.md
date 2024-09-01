---
sidebar_position: 3
---

# Explorer Sample Rate

In AnyShake Explorer, the sample rate means the number of samples collected per second. The default value is `100`, which means the firmware will collect 100 samples per second.

You can change the sample rate in the header file `include/settings.h`:

```cpp
#define EXPLORER_SAMPLERATE 100
```

Recommend values are `25`, `50`, `100`, `125`. Higher values may bring performance improvement, you can test them and find the best value for your device.
