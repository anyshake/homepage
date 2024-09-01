---
sidebar_position: 4
---

# ADC 24 Bit Mode

The AnyShake Explorer uses ADS1262, a 32-bit analog-to-digital converter (ADC) with 32-bit resolution. But in most cases, we only need 24-bit data. The 24-bit mode allows the ADC to directly output 24-bit data, which can reduce noise to a certain extent. 24 bit mode is enabled by default in AnyShake Explorer.

You can change the sample rate in the header file `include/settings.h`:

```cpp
#define EXPLORER_24BIT_MODE 1
```

To disable 24-bit mode, set `EXPLORER_24BIT_MODE` to `0`.
