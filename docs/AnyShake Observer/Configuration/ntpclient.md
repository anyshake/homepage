---
sidebar_position: 5
---

# NTP Client Settings

 - Key: `ntpclient_settings`
 - Description: NTP client settings for AnyShake Observer

AnyShake Observer requires a NTP client to synchronize time with NTP servers. This object manages NTP client settings for AnyShake Observer.

## Fields

### host

 - Type: `string`
 - Description: NTP server host

### port
    
 - Type: `int`
 - Description: NTP server port

### timeout

 - Type: `int`
 - Description: NTP client timeout, in seconds

### interval

 - Type: `int`
 - Description: NTP client update interval, in seconds

## Example

```json
{
    "ntpclient_settings": {
        "host": "0.pool.ntp.org",
        "port": 123,
        "timeout": 3,
        "interval": 5
    }
}
```
