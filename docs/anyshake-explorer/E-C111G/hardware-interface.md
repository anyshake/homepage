---
sidebar_position: 1
title: Hardware Interface
slug: hardware-interface
---

This section provides a comprehensive explanation of the hardware interfaces available on E-C111G. The following diagram illustrates the hardware interface:

![Hardware Interaface](img/hardware-interface.webp)

## Power Interface

### Power Supply

The **E-C111G** operates on a DC power input ranging from **9 V to 12 V**, delivered through a **2-pin terminal block** or a **DC barrel jack** (available in newer hardware revisions). Internally, the input voltage is regulated to provide the multiple voltage rails required by the system: **+3.3 V**, **+2.5 V**, and **−2.5 V**.

The power input stage is robustly protected with:

- Overvoltage and short-circuit protection
- Reverse polarity protection
- A TVS (transient-voltage-suppression) diode to guard against input surges

The E-C111G is designed with energy efficiency in mind. Under normal operating conditions, its power consumption is approximately **0.6 W**.

### Power Control

The device includes an onboard **self-locking push-button switch** to control the main power. Pressing the switch powers on the system, and it remains latched until powered off.

To support development and diagnostics, **three voltage rail control jumpers** are provided:

- `JP1` — Controls the **+3.3 V** rail, primarily used by digital logic (e.g., MCU, OLED)
- `JP2` — Controls the **+2.5 V** rail, typically used by analog components such as op-amps and ADCs
- `JP3` — Controls the **−2.5 V** rail, required for analog signal processing stages

:::info
All jumpers are closed by default, enabling full functionality. Developers may open them to isolate power rails during troubleshooting or measurement.
:::

### Test Points

To facilitate voltage verification during testing or development, the PCB includes clearly marked test points on the rear side:

| Test Point | Description                            | Typical Voltage |
| ---------- | -------------------------------------- | --------------- |
| `TP4`      | DC-DC output for analog subsystems     | \~+5.5 V        |
| `TP2`      | Regulated analog reference             | +2.5 V          |
| `TP5`      | Digital supply for MCU and peripherals | +3.3 V          |
| `TP1`      | Inverted DC-DC output (pre-regulator)  | \~−5.0 V        |
| `TP3`      | Regulated negative analog rail         | −2.5 V          |

### Power Architecture

The internal power architecture is illustrated below:

```mermaid
flowchart LR
    DC-IN --> MP2236
    MP2236 --> AMS1117-3.3
    AMS1117-3.3 --> +3.3V
    MP2236 --> LP2985-2.5
    LP2985-2.5 --> +2.5V
    MP2236 --> TPS5430
    TPS5430 --> TPS72325
    TPS72325 --> -2.5V
```

The system employs multiple regulators for improved stability and noise performance. Notably, **analog and digital grounds are separated** on the PCB to minimize high-frequency interference between subsystems. The two ground planes are connected via a **0 Ω resistor**, allowing controlled return current flow while maintaining signal integrity.

## Communication Ports

The **E-C111G** supports multiple serial communication protocols to accommodate diverse deployment scenarios. Each interface outputs identical real-time data streams, allowing **simultaneous connection to multiple host systems** such as PCs, embedded controllers, or industrial gateways.

### RS-232 Interface

The RS-232 interface uses **industry-standard DB9 connectors**, with both **male** and **female** ports available on the device. The Explorer Kit includes a **DB9 male-to-female cable** for easy connection to host devices.

- **Connector Type**: DB9 (1× male, 1× female)
- **Voltage Level**: ±12V (compliant with RS-232 standard)
- **Maximum Baud Rate**: **409600 bps**
- **Duplex Mode**: Full-duplex
- **Recommended Cable Length**: Up to 10 m (depending on environment)
- **Use Case**: Ideal for **direct serial connections** to desktop computers, industrial PCs, or SBCs such as **Raspberry Pi** (via USB–RS232 adapters), offering mature driver support and excellent compatibility

The following figures illustrate the RS-232 connectors on E-C111G:

![RS-232](img/port-rs-232.webp)

:::info
We recommend using the RS-232 interface in most scenarios due to its stability, simplicity, and broad compatibility across platforms.
:::

### RS-485 Interface

The RS-485 port is provided via a **2-pin screw terminal** for direct connection to twisted-pair cabling. It supports **differential half-duplex communication**, making it suitable for longer cable runs and more electrically noisy environments.

- **Connector Type**: 2-pin terminal block (A/B)
- **Voltage Level**: 3.3V logic (via transceiver)
- **Maximum Baud Rate**: **115200 bps**
- **Duplex Mode**: Half-duplex
- **Termination & Biasing**: External (user-supplied if required)
- **Recommended Cable Length**: Up to 50 m (at lower baud rates, using shielded twisted-pair)
- **Use Case**: Designed for **industrial and long-distance applications**, such as connecting remote sensors, outdoor enclosures, or distributed seismic arrays in field environments

The following figure illustrates the RS-485 signal lines on E-C111G:

![RS-485](img/port-rs-485.webp)

:::info
RS-485 wiring is not standardized. Ensure consistent signal lines (A/B) alignment across all devices on the bus.
:::

### TTL Serial Interface

A **2.54mm 3-pin TTL-level UART header** is provided for embedded system integration or firmware development. This interface operates at **3.3 V logic levels** and is **not electrically isolated**, so careful attention must be paid during connection.

- **Connector Type**: 3-pin header (TX, RX, GND)
- **Voltage Level**: 3.3V logic (non-inverted)
- **Maximum Baud Rate**: **409600 bps**
- **Duplex Mode**: Full-duplex
- **Use Case**: Recommended for **embedded system development**, including:
    - Integration with **SBC GPIOs**
    - Direct serial communication with microcontrollers (STM32, RP2040, etc.)

![TTL Serial](img/port-ttl-serial.webp)

:::danger Caution
Connecting this port to 5V logic (e.g., older Arduino boards) **may permanently damage the device**. Always verify voltage compatibility before use.
:::

### Summary

| Interface  | Connector Type    | Logic Level | Max Baud Rate | Duplex | Typical Use Case                       |
| ---------- | ----------------- | ----------- | ------------- | ------ | -------------------------------------- |
| RS-232     | DB9 (male/female) | ±12V        | 409600 bps    | Full   | General PC/server/SBC connection       |
| RS-485     | 2-pin terminal    | 3.3V diff.  | 115200 bps    | Half   | Long-distance communication            |
| TTL Serial | 3-pin header      | 3.3V        | 409600 bps    | Full   | SBC/microcontroller GPIO communication |

## Debugging and Boot Configuration

The **E-C111G** firmware is fully **open source** and actively maintained. Users are encouraged to customize, compile, and flash the firmware to suit their specific use cases. The system supports field upgrades and includes a **digital inclinometer mode**, which enables users to access onboard accelerometer data for precise leveling and optimal sensor installation.

### SWD Interface

The device provides a **Serial Wire Debug (SWD)** interface via a **3-pin 2.54 mm header**, compatible with standard development tools such as **ST-Link** and **J-Link**.

- `GND` — Ground
- `SWDIO` — Data I/O
- `SWCLK` — Clock

![SWD Interface](img/debugger-swd.webp)

This interface allows for:

- Firmware flashing
- Breakpoint debugging
- Real-time memory inspection

:::danger Caution
The SWD interface is **not electrically isolated**. Use caution when connecting to a powered system to avoid potential damage to your programmer or the device.
:::

For example, when using the official **ST-Link V2** for SWD debugging, connect the pins as follows:

| ST-Link V2 Pin | E-C111G Pin |
| -------------- | ----------- |
| Pin 4 (GND)    | GND         |
| Pin 7 (SWDIO)  | DIO         |
| Pin 9 (SWCLK)  | CLK         |

![ST-Link V2 wiring](img/stlink-wiring.webp)

:::info
If you are using J-Link or other SWD-compatible tools, please refer to the vendor’s pinout documentation to ensure proper connection.
:::

### Boot Mode Selection

The E-C111G provides **4 boot modes** selectable via a dual **BOOT0/BOOT1 jumper** configuration. These modes allow users to switch between normal operation, inclinometer mode, and firmware update modes.

| BOOT0 | BOOT1 | Boot Mode                | Description                                                                     |
| ----- | ----- | ------------------------ | ------------------------------------------------------------------------------- |
| 0     | 0     | Main Flash (Acquisition) | Default mode; runs the primary firmware for seismic data acquisition.           |
| 0     | 1     | Main Flash (Leveling)    | Starts the firmware in inclinometer mode to assist with installation alignment. |
| 1     | 0     | System Memory            | Enters STM32 built-in bootloader (for firmware upgrade via UART).               |
| 1     | 1     | Embedded SRAM            | Used for development and debugging temporary firmware loads.                    |

> ℹ️ **Note**: Boot mode is read on startup. After changing jumper positions, a **manual reset** is required to apply the new boot mode.

![Boot Mode Select](img/boot-mode-select.webp)

:::info Default Behavior
By default, the device boots from main flash (`BOOT0=0`, `BOOT1=0`) into seismic data acquisition mode.
:::
