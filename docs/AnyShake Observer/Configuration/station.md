---
sidebar_position: 1
---

# Station Settings

 - Key: `station_settings`
 - Description: Define the basic information of the site, which will be displayed on the Web UI.

This is required to display the basic information of the site on the Web UI, these fields do not have strict format requirements and have no impact on data collection.

## Fields

### name

 - Type: `string`
 - Description: Custom name of the station

### owner

 - Type: `string`
 - Description: Owner of the station

### region

 - Type: `string`
 - Description: Region of the station located

### country

 - Type: `string`
 - Description: Country of the station located

### city

 - Type: `string`
 - Description: City of the station located

## Example

```json
{
    "station_settings": {
        "name": "AnyShake Station",
        "owner": "Lee",
        "region": "Asia",
        "country": "China",
        "city": "Beijing"
    }
}
```
