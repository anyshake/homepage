---
sidebar_position: 5
title: Troubleshooting
slug: troubleshooting
---

This section summarizes common issues encountered when using AnyShake Explorer and provides corresponding solutions.

## Waveform is highly distorted with strong 50/60 Hz mains interference

This issue is most commonly caused by **low-quality power adapters**. To mitigate the problem, we recommend the following approaches:

1. **Apply Digital Filtering**  
   Configure a low-pass digital filter during the pre-processing stage with a **cut-off frequency of 40 Hz**. This effectively suppresses mains interference while preserving seismic signals below 40 Hz.

2. **Replace the Power Adapter**  
   Some low-quality AC–DC adapters introduce excessive **ripple noise and electromagnetic radiation**, which can significantly degrade data quality.

3. **Switch to Battery Power**  
   Powering the system with a **12 V battery** can fully isolate it from **50/60 Hz mains interference**, resulting in a much cleaner waveform.

## Persistent interference or resonance in a specific frequency band

Geophone sensors are extremely sensitive to vibration. As a result, environmental or structural resonance can have a noticeable impact on the recorded data. Common sources include:

- **Structural Resonance**  
  Large **glass doors or windows** often introduce strong resonance around **2 Hz**.
- **Improper Installation Location**  
  Deploying the device in **high-rise buildings (above ~7 floors)** frequently results in dominant resonance near **1 Hz** due to building sway.
- **Soil Liquefaction Zones**  
  Sites located in soil liquefaction–prone areas may also exhibit pronounced resonance around **1 Hz**, adversely affecting signal quality.

Recommended mitigation strategies:

1. **Relocate the Device**  
   Install the instrument on solid ground-level surfaces and avoid proximity to large glass structures or flexible floors.
2. **Adjust Filter Parameters**  
   If relocation is not possible, apply more **aggressive filtering** to suppress interference within the affected frequency bands.

## One channel shows significantly lower amplitude than the others

Based on user feedback, this issue is typically caused by either **poor electrical contact** or a **faulty geophone**. To identify the root cause, follow the steps below:

1. **Rule out contact issues**  
   Swap the wiring terminals between channels and observe whether the abnormal channel returns to normal.

    - If the channel recovers, the issue is likely due to poor contact (e.g. loose wiring or oxidized terminals).
    - If the problem remains on the same channel, the geophone itself is likely defective.

2. **Check the geophone condition**  
   If a faulty geophone is suspected, remove it from the device and gently shake it a few times in either the horizontal or vertical direction. Reinstall the geophone and retest.
    - If the issue is resolved, normal operation can be resumed.
    - If the amplitude remains significantly lower, the geophone is likely damaged and should be replaced.

## Geophone or accelerometer channel output is not centered around the zero baseline

Baseline drift is commonly caused by temperature variation, operational amplifier offset voltage, and other analog front-end characteristics. The AnyShake Explorer E-C111G outputs **raw waveform data** without baseline calibration or trend removal. Therefore, it is normal for the signal baseline to be offset from zero, and in most cases this behavior can be safely ignored.

However, for **geophone channels**, if the baseline offset becomes excessively large and begins to affect signal interpretation or available dynamic range, [manual calibration is recommended](advanced-operations/adc-calibration.md).
