---
sidebar_position: 1
---

# Legacy Mode

AnyShake Explorer currently has two data transmission protocols, legacy mode and mainline mode, which are used to transmit data to the AnyShake Observer. The mainline mode is the default mode, which is more stable and efficient, compatible with AnyShake Observer v3.2.2 and higher version. The legacy mode is an old version of the data transmission protocol, which is compatible with all versions of AnyShake Observer.

In AnyShake Explorer, you can change it in the header file `include/settings.h`:

```cpp
#define EXPLORER_LEGACY_MODE 0
```

**It is strongly recommended NOT to use legacy mode, as it will cause jitter in the sampling rate, resulting in discontinuous SeedLink waveforms, etc.**
