---
sidebar_position: 1
---

# Station Settings

 - Key: `station_settings`
 - Description: Station settings for AnyShake Observer

This object manages global station settings for AnyShake Observer.

## Fields

### uuid

 - Type: `string`
 - Description: Station UUID, you can generate it with `uuidgen` command, or pick one from [uuidgenerator.net](https://uuidgenerator.net/)

### name

 - Type: `string`
 - Description: Station name

### station

 - Type: `string`
 - Description: Station code

### network

 - Type: `string`
 - Description: Network code

### location

 - Type: `string`
 - Description: Location code

### latitude

 - Type: `float`
 - Description: Station latitude

### longitude

 - Type: `float`
 - Description: Station longitude

### elevation

 - Type: `float`
 - Description: Station elevation

### region

 - Type: `string`
 - Description: Region of the station located

### country

 - Type: `string`
 - Description: Country of the station located

### city

 - Type: `string`
 - Description: City of the station located

### owner

 - Type: `string`
 - Description: Owner of the station

## Example

```json
{
    "station_settings": {
        "uuid": "a373e39c-8e15-44ae-a1ad-6fb622bc49e6",
        "name": "Test Station",
        "station": "SHAKE",
        "network": "AS",
        "location": "00",
        "latitude": 39.9,
        "longitude": 116.3,
        "elevation": 0,
        "region": "Asia",
        "country": "China",
        "city": "Beijing",
        "owner": "Lee"
    }
}
```
