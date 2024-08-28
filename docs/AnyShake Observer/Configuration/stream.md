---
sidebar_position: 5
---

# Stream Settings

 - Key: `stream_settings`
 - Description: Define the data stream settings for the data stream server

AnyShake Observer requires uniquely identified using a sequence of codes named network, station, location and channel, where the channel is further subdivided into band, source and subsource codes.

Each of these codes must be composed of the following ASCII character sets:

 - Uppercase [A-Z], ASCII 65 through 90
 - Numeric [0-9], ASCII 48 through 57

## Fields

### network

 - Type: `string`
 - Description: Always in 2 uppercase character.

### station

 - Type: `string`
 - Description: Always less than 5 uppercase character.

### location

 - Type: `string`
 - Description: Always in 2 uppercase character.

### channel

 - Type: `string`
 - Description: Prefix for the channel code, always in 2 uppercase character, one for band and one for source. See [Channel codes — FDSN Source Identifiers](https://docs.fdsn.org/projects/source-identifiers/en/v1.0/channel-codes.html) for more details.

## Example

```json
{
    "stream_settings": {
        "network": "AS",
        "station": "SHAKE",
        "location": "00",
        "channel": "EH"
    }
}
```
