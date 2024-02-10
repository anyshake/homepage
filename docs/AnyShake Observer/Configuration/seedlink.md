---
sidebar_position: 9
---

# SeedLink Settings

 - Key: `seedlink_settings`
 - Description: SeedLink settings for AnyShake Observer

This object manages SeedLink settings for AnyShake Observer, which are optional for its core functionality. When enabled, AnyShake Observer will start a SeedLink streamer so that users can access the live seismic data through SeedLink protocol.

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

### size

 - Type: `int`
 - Description: SeedLink buffer size

### buffer

 - Type: `string`
 - Description: Path to SeedLink buffer file

## Example

```json
{
    "seedlink_settings": {
        "enable": false,
        "host": "0.0.0.0",
        "port": 18000,
        "size": 43200,
        "buffer": "/data/sl_buffer.dat"
    }
}
```
