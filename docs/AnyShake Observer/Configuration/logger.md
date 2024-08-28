---
sidebar_position: 9
---

# Logger Settings

 - Key: `logger_settings`
 - Description: Define the log level, rotation, and file path for log dump.

## Fields

### level

 - Type: `string`
 - Description: Log level, available values are:
    - `info`
    - `warn`
    - `error`

### rotation

 - Type: `int`
 - Description: Maximum number of log archives. Set to `0` to no limit.

### lifecycle

 - Type: `int`
 - Description: Maximum number of days to keep log archives. Set to `0` to no limit.

### size

 - Type: `int`
 - Description: Maximum size of each log file in MB. Set to `0` to use the default size of 100 MB.

### dump

 - Type: `string`
 - Description: Log file path, including file name. If empty, log dump is disabled.

## Example

```json
{
    "logger_settings": {
        "level": "info",
        "rotation": 7,
        "lifecycle": 3,
        "size": 5,
        "dump": "/home/yuki/observer.log"
    }
}
```
