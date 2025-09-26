---
sidebar_position: 2
title: Hardware Specification
slug: hardware-specification
---

:::info
Unless otherwise specified, all specifications below refer to the **Full Kit** version of the AnyShake Explorer.
:::

## General

| Item                  | Specification                        |
| --------------------- | ------------------------------------ |
| Dimensions            | 135 mm × 135 mm × 104.5 mm           |
| Weight                | 0.65 kg                              |
| Enclosure Rating      | IP10 (indoor use)                    |
| Power Supply          | 9 V – 12 V DC                        |
| Power Consumption     | ~0.6 W (50 mA @ 12 V)                |
| Operating Temperature | -20 °C to 70 °C                      |
| Time Synchronization  | GNSS (via active antenna) / NTP      |
| Timing Accuracy       | GNSS: ±1 ms, NTP: ±10 ms             |
| Installation          | Plug-and-play with leveling mode     |
| Display               | 0.96" OLED (SSD1306, I²C interface)  |
| Tilt Sensor           | Digital inclinometer (firmware mode) |
| Warranty              | 2 years from shipment date           |

## Sensor System

| Item                   | Specification                                           |
| ---------------------- | ------------------------------------------------------- |
| Geophones              | 3 × 4.5 Hz open-loop velocity sensors                   |
| Frequency Response     | ~0.5 Hz – 27 Hz (with gain & filtering)                 |
| Accelerometer          | 3-axis, 16-bit (±2g), STMicroelectronics LSM6DSR        |
| ADC                    | 32-bit delta-sigma ADC, differential input              |
| Measurement Range      | ±2.5 V                                                  |
| Sampling Modes         | Geophone-only / Accelerometer-only / Combined 6-channel |
| Supported Sample Rates | 50 / 100 / 200 / 250 SPS                                |
| Earthquake Warning     | Compatible with EEW systems                             |

:::danger Compatibility Warning
Only 4.5 Hz open-loop magnetic geophones are supported.  
Do not connect broadband seismometers or sensors with other transfer functions.
:::

## Data Interfaces

| Interface       | Specification                                  |
| --------------- | ---------------------------------------------- |
| Packet Interval | 100 ms per packet, EEW compatible              |
| RS-232          | 2 × DB9 ports (±12 V, up to 409600 bps)        |
| RS-485          | 1 × 2-pin terminal block (half-duplex, 3.3 V)  |
| TTL Serial      | 3-pin header (3.3 V logic, up to 409600 bps)   |
| SWD Debug Port  | 3-pin 2.54 mm header (compatible with ST-Link) |
| GNSS Antenna    | SMA connector, 3.3 V bias for active antennas  |

:::info
Use only **active GNSS antennas** with L1/L5 support. Passive antennas are not supported.
:::

## Software Support

**AnyShake Observer** is the official open-source companion software for the AnyShake Explorer. It provides real-time data visualization, historical waveform access, earthquake detection, and network integration.

| Item                   | Specification                                 |
| ---------------------- | --------------------------------------------- |
| Platforms              | Windows, Linux, macOS, BSD                    |
| Deployment             | Single-binary executable or Docker container  |
| UI                     | Web-based interface, responsive layout        |
| Languages              | Go (backend), TypeScript (frontend)           |
| Real-Time Monitoring   | Live waveform viewer, multi-channel           |
| Historical Data Query  | Time-based or event-based search              |
| Earthquake Detection   | QuakeSense (STA/LTA, Z-Detect algorithms)     |
| Export Formats         | MiniSEED, SAC, TXT, WAV                       |
| Protocols              | SeedLink, TCP (raw stream), HTTP              |
| Database Compatibility | SQLite, PostgreSQL, MySQL/MariaDB, SQL Server |
| Multi-User Support     | Yes                                           |
| SeisComP Integration   | Yes                                           |
| Offline Operation      | Fully supported                               |
| Daily Helicorders      | Auto-generated with sharing support           |
