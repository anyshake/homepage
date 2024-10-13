---
sidebar_position: 1
---

# MiniSEED Settings

 - Key: `miniseed`
 - Description: miniSEED settings for AnyShake Observer

This object manages miniSEED settings for AnyShake Observer, which are optional for its core functionality. When enabled, AnyShake Observer will generate daily miniSEED files accessible through the web interface.

## Fields

### enable

 - Type: `bool`
 - Description: Enable miniSEED output

### lifecycle

 - Type: `int`
 - Description: miniSEED file lifecycle, in days. Set to 0 to disable

### path

 - Type: `string`
 - Description: Path to store miniSEED files

## Example

```json
{
    "services_settings": {
        "miniseed": {
            "enable": false,
            "lifecycle": 10,
            "path": "/data/miniseed"
        }
    }
}
```
