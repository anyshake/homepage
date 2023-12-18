---
sidebar_position: 8
---

# MiniSEED Settings

 - Key: `miniseed_settings`
 - Description: MiniSEED settings for AnyShake Observer

This object manages MiniSEED settings for AnyShake Observer, which are optional for its core functionality. When enabled, AnyShake Observer will generate daily MiniSEED files accessible through the web interface.

**Please note that MiniSEED and archiving are independent features.**

## Fields

### enable

 - Type: `bool`
 - Description: Enable MiniSEED output

### path

 - Type: `string`
 - Description: Path to store MiniSEED files

### station

 - Type: `string`
 - Description: Station code

### network

 - Type: `string`
 - Description: Network code

### lifecycle

 - Type: `int`
 - Description: MiniSEED file lifecycle, in days

## Example

```json
{
    "miniseed_settings": {
        "enable": false,
        "path": "/data/miniseed",
        "station": "TEST",
        "network": "XX",
        "lifecycle": 10
    }
}
```
