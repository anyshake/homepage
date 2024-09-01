---
sidebar_position: 1
---

# Hardware

**Please note: AnyShake Explorer implemented by ESP8266 will be deprecated soon, the new hardware solution is currently in the "next" branch and will be merged into the master branch.**

## Overview

AnyShake Explorer is a kit that includes 3 earthquake sensors, a PCB board for collecting seismic data from the sensors, and firmware for the PCB board.

## Quick Start Guide

We don't provide a link to purchase this kit, but you'll able to obtain the [BOM (Bill of materials)](https://en.wikipedia.org/wiki/Bill_of_materials) and [Gerber files](https://en.wikipedia.org/wiki/Gerber_format) from our [GitHub repository](https://github.com/anyshake/explorer), and then find a manufacturer to fabricate and assemble it.

**Please refer to [Quick Start Guide](https://github.com/anyshake/explorer/blob/master/hardware/README.md) in our GitHub repository for more details.**

## Geophone Sensors

Sensor Requirements:

 - Quantity: 3
 - Recommended Natural Frequency: 4.5 Hz
 - Orientation: 1 vertical + 2 horizontal (please ensure this configuration)

Sensor Parameter Acquisition:

Once you have obtained the sensors, consult their respective datasheets to collect the following crucial parameters:

 - Sensitivity (V/cm/s): This value indicates the output voltage produced by the sensor per unit ground velocity.
 - Natural Frequency (Hz): This parameter defines the sensor's resonant frequency, where it exhibits maximum sensitivity. Aiming for a 4.5 Hz natural frequency will optimize responsiveness to earthquake-related seismic waves.
 - Damping Ratio (%): This value represents the amount of energy dissipation within the sensor, influencing its ability to follow rapid ground motion changes.

Please note that these parameters are essential for configuring the AnyShake system properly and ensuring optimal performance in capturing seismic data.
