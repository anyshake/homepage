---
sidebar_position: 2
---

# Location Settings

 - Key: `location_settings`
 - Description: Define the station location as a fallback when GNSS location information is not available.

When AnyShake Observer is working at legacy mode (e.g., AnyShake Explorer implementation using ESP8266, which does not have GNSS support), the GNSS location information is not available. In this case, this configuration will be used as the fallback location information.

*AnyShake Observer does not require high position accuracy. Whether using GNSS or this fallback, when the coordinates are transmitted over the public network, they are only accurate to a few kilometers.*

## Fields

### latitude

 - Type: `float`
 - Description: Latitude of the current station

### longitude

 - Type: `float`
 - Description: Longitude of the current station

### elevation

 - Type: `float`
 - Description: Elevation of the current station

## Example

```json
{
    "location_settings": {
        "latitude": 39.9,
        "longitude": 116.4,
        "elevation": 50.0
    }
}
```
