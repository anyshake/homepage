---
sidebar_position: 3
---

# Explorer Settings

 - Key: `explorer_settings`
 - Description: Define AnyShake Explorer settings, including the serial port name, baud rate, etc.

This area configures the method for AnyShake Observer to establish a connection with AnyShake Explorer (such as serial port, TCP), and the modes AnyShake Explorer operates in.

## Fields

### engine

 - Type: `string`
 - Description: Data source engine, available options are:
   - `serial`: Via serial port
   - `tcp`: Via TCP connection

### dsn

 - Type: `string`
 - Description: Data source name, including the serial port name, baud rate or TCP connection address.
    - Example for Windows serial: `transport://COM1?baudrate=115200`
    - Example for *nix serial: `transport:///dev/ttyUSB0?baudrate=115200`
    - Example for TCP: `transport://10.0.0.101:30000`

### legacy

 - Type: `bool`
 - Description: When using ESP8266-based AnyShake Explorer, set this option to `true`.

## Example

```json
{
    "explorer_settings": {
        "dsn": "transport:///dev/ttyUSB0?baudrate=115200",
        "engine": "serial",
        "legacy": false
    }
}
```
