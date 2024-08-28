---
sidebar_position: 4
---

# SeedLink Settings

 - Key: `seedlink_settings`
 - Description: SeedLink settings for AnyShake Observer

This object manages SeedLink settings for AnyShake Observer, which are optional for its core functionality. When enabled, AnyShake Observer will start a SeedLink streamer so that users can access the live seismic data through SeedLink protocol.

**The SeedLink protocol requires the sampling rate to be consistent, in legacy mode, when the sampling rate occasionally fluctuates, SeedLink waveforms may be discontinuous.**

## Fields

### enable

 - Type: `bool`
 - Description: Enable SeedLink server

### host

 - Type: `string`
 - Description: SeedLink server host

### port

 - Type: `int`
 - Description: SeedLink server port

### duration

 - Type: `int`
 - Description: SeedLink buffer duration, in seconds

## Example

```json
{
    "services_settings": {
        "seedlink_settings": {
            "enable": false,
            "host": "0.0.0.0",
            "port": 18000,
            "duration": 86400
        }
    }
}
```
