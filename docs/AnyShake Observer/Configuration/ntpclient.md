---
sidebar_position: 6
---

# NTP Client Settings

 - Key: `ntpclient_settings`
 - Description: Define a available NTP server, required for initial time syncing.

When the application starts, it will try to synchronize time with the NTP server and create an internal time source. The internal timesource will be updated every day at UTC 00:00:00. This time is mainly used for marking waveforms and API responses.

AnyShake Observer has two time sources, from GNSS (provided by AnyShake Explorer) and NTP (provided by Internet). GNSS time has higher priority than NTP time.

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

### retry

 - Type: `int`
 - Description: NTP client retry count, set to 0 to disable retry

## Example

```json
{
    "ntpclient_settings": {
        "host": "pool.ntp.org",
        "port": 123,
        "timeout": 5,
        "retry": 5
    }
}
```
