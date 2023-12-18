---
sidebar_position: 4
---

# Serial Settings

 - Key: `serial_settings`
 - Description: Serial port settings for AnyShake Observer

AnyShake Observer requires a serial port to communicate with the AnyShake Explorer. This object manages serial port settings for AnyShake Observer.

## Fields

### packet

 - Type: `int`
 - Description: Channel packet length, must be same with AnyShake Explorer

### baud

 - Type: `int`
 - Description: Serial baud rate, must be same with AnyShake Explorer

### device

 - Type: `string`
 - Description: Serial device, in Linux, it is usually starts with `/dev/tty`, in Windows, it is usually starts with `COM`

## Example

```json
{
    "serial_settings": {
        "packet": 4,
        "baud": 19200,
        "device": "/dev/ttyUSB0"
    }
}
```
