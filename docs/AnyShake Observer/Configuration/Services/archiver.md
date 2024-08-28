---
sidebar_position: 2
---

# Archiver Settings

 - Key: `archiver_settings`
 - Description: Archiver settings for AnyShake Observer

This object configures settings for the optional archiver service. The archiver stores ADC readout to database by timestamp.

## Fields

### enabled

 - Type: `bool`
 - Description: Whether to enable the archiver, if set to `false`, some features related to history waveform will not be available.

### lifecycle

 - Type: `int`
 - Description: Life cycle of records in days. Set to 0 to disable. This is useable if you want to keep the records for a certain period of time.

## Example

```json
{
    "services_settings": {
        "archiver_settings": {
            "enable": true,
            "lifecycle": 10
        }
    }
}
```
