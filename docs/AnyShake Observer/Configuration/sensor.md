---
sidebar_position: 4
---

# Sensor Settings

 - Key: `sensor_settings`
 - Description: Define the geophone and ADC characteristics of AnyShake Explorer.

This object configures characteristic for the geophones, so that the velocity of the geophones can be calculated from the ADC data. The geophone settings are necessary for running the AnyShake Observer.

## Fields

### frequency

 - Type: `float`
 - Description: Natural frequency of the geophone, can be found in the datasheet of the geophone.

### sensitivity

 - Type: `float`
 - Description: Sensitivity of the geophone, in V/m/s, can be found in the datasheet of the geophone.

### velocity

 - Type: `bool`
 - Description: Set to `true` if the geophone is a velocity sensor, `false` if it is an acceleration sensor.

### vref

 - Type: `float`
 - Description: Reference voltage of the ADC, in V.

### fullscale

 - Type: `float`
 - Description: Full scale of the ADC, in V.

### resolution

 - Type: `int`
 - Description: Resolution of the ADC, in bits.

## Example

```json
{
    "sensor_settings": {
        "frequency": 4.5,
        "sensitivity": 28.8,
        "velocity": true,
        "vref": 5.0,
        "fullscale": 10.0,
        "resolution": 32
    }
}
```