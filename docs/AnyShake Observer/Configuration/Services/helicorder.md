---
sidebar_position: 5
---

# Helicorder Settings

 - Key: `helicorder`
 - Description: Helicorder settings for AnyShake Observer

This object manages helicorder settings for AnyShake Observer, which are optional for its core functionality. When enabled, AnyShake Observer will generate daily helicorder images accessible through the web interface.

## Fields

### enable

 - Type: `bool`
 - Description: Enable helicorder output

### lifecycle

 - Type: `int`
 - Description: helicorder file lifecycle, in days. Set to 0 to disable

### path

 - Type: `string`
 - Description: Path to store helicorder files

## Example

```json
{
    "services_settings": {
        "helicorder": {
            "enable": false,
            "lifecycle": 10,
            "path": "/data/helicorder"
        }
    }
}
```
