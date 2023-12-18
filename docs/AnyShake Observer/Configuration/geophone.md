---
sidebar_position: 2
---

# Geophone Settings

 - Key: `geophone_settings`
 - Description: Geophone settings for AnyShake Observer

This object configures characteristic for the geophones, so that the velocity of the geophones can be calculated from the ADC data. The geophone settings are necessary for running the AnyShake Observer.

## Fields

### ehz

 - Type: `object`
 - Description: Geophone settings for EHZ channel
 - Fields:
   - sensitivity
     - Type: `float`
     - Description: Sensitivity of the geophone, in V/cm/s, can be found in the datasheet of the geophone
   - damping
     - Type: `float`
     - Description: Damping rate of the geophone, can be found in the datasheet of the geophone
   - frequency
     - Type: `float`
     - Description: Natural frequency of the geophone, can be found in the datasheet of the geophone

### ehe

 - Type: `object`
 - Description: Geophone settings for EHE channel
 - Fields:
 - sensitivity
     - Type: `float`
     - Description: Sensitivity of the geophone, in V/cm/s, can be found in the datasheet of the geophone
 - damping
     - Type: `float`
     - Description: Damping rate of the geophone, can be found in the datasheet of the geophone
 - frequency
     - Type: `float`
     - Description: Natural frequency of the geophone, can be found in the datasheet of the geophone

### ehn

 - Type: `object`
 - Description: Geophone settings for EHN channel
 - Fields:
 - sensitivity
     - Type: `float`
     - Description: Sensitivity of the geophone, in V/cm/s, can be found in the datasheet of the geophone
 - damping
     - Type: `float`
     - Description: Damping rate of the geophone, can be found in the datasheet of the geophone
 - frequency
     - Type: `float`
     - Description: Natural frequency of the geophone, can be found in the datasheet of the geophone

## Example

```json
{
    "geophone_settings": {
        "ehz": {
            "sensitivity": 0.288,
            "damping": 0.56,
            "frequency": 4.5
        },
        "ehe": {
            "sensitivity": 0.288,
            "damping": 0.56,
            "frequency": 4.5
        },
        "ehn": {
            "sensitivity": 0.288,
            "damping": 0.56,
            "frequency": 4.5
        }
    }
}
```