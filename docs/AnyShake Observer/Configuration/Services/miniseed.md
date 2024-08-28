---
sidebar_position: 1
---

# MiniSEED Settings

 - Key: `miniseed_settings`
 - Description: MiniSEED settings for AnyShake Observer

This object manages MiniSEED settings for AnyShake Observer, which are optional for its core functionality. When enabled, AnyShake Observer will generate daily MiniSEED files accessible through the web interface.

## Fields

### enable

 - Type: `bool`
 - Description: Enable MiniSEED output

### lifecycle

 - Type: `int`
 - Description: MiniSEED file lifecycle, in days. Set to 0 to disable

### path

 - Type: `string`
 - Description: Path to store MiniSEED files

## Example

```json
{
    "services_settings": {
        "miniseed_settings": {
            "enable": false,
            "lifecycle": 10,
            "path": "/data/miniseed"
        }
    }
}
```
