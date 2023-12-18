---
sidebar_position: 3
---

# ADC Settings

 - Key: `adc_settings`
 - Description: ADC settings for AnyShake Observer

AnyShake Observer receives ADC raw counts, not voltage values. The front-end web page of AnyShake Observer converts the ADC count into a voltage value based on this field to get PGA and PGV.

## Fields

### resolution

 - Type: `int`
 - Description: ADC resolution, in bits

### fullscale

 - Type: `float`
 - Description: ADC full scale, in V

## Example

```json
{
    "adc_settings": {
        "resolution": 27,
        "fullscale": 5.0
    }
}
```
