---
sidebar_position: 2
---

# Quick Start

You need to configure AnyShake Observer after installing it. Here is a quick configuration for a demo run. You may need modify it according to your environment.

## Configuration

The configuration file is in JSON format. You can use any text editor to edit it. The demo configuration is taken from [v2.4.0](https://github.com/anyshake/observer/releases/tag/v2.4.0).

```json
{
    "station_settings": {
        "uuid": "a373e39c-8e15-44ae-a1ad-6fb622bc49e6", // UUID of the station, you can generate it with `uuidgen` command, or pick one from uuidgenerator.net
        "name": "Test Station", // Name of the station, will be displayed on the web page
        "station": "SHAKE", // Station code, less than 5 characters
        "network": "AS", // Network code, should be 2 characters
        "location": "00", // Location code, should be 2 characters
        "latitude": 39.9, // Latitude of the station
        "longitude": 116.3, // Longitude of the station
        "elevation": 0 // Elevation of the station
    },
    "geophone_settings": {
        "ehz": {
            "sensitivity": 0.288, // Sensitivity of the geophone, in V/cm/s, can be found in the datasheet of the geophone
            "damping": 0.56, // Damping rate of the geophone, can be found in the datasheet of the geophone
            "frequency": 4.5 // Natural frequency of the geophone, can be found in the datasheet of the geophone
        }, // Geophone settings for EHZ channel
        "ehe": {
            "sensitivity": 0.288,
            "damping": 0.56,
            "frequency": 4.5
        }, // Geophone settings for EHE channel
        "ehn": {
            "sensitivity": 0.288,
            "damping": 0.56,
            "frequency": 4.5
        } // Geophone settings for EHN channel
    },
    "adc_settings": {
        "resolution": 27, // ADC resolution, in bits
        "fullscale": 5.0 // ADC full scale, in V
    },
    "serial_settings": {
        "packet": 4, // Channel packet length, must be same with AnyShake Explorer
        "baud": 19200, // Serial baud rate, must be same with AnyShake Explorer
        "device": "/dev/ttyUSB0" // Serial device, in Linux, it is usually starts with /dev/tty, in Windows, it is usually starts with COM
    },
    "ntpclient_settings": {
        "host": "0.pool.ntp.org", // NTP server host
        "port": 123, // NTP server port
        "timeout": 3, // NTP client timeout, in seconds
        "interval": 5 // NTP client update interval, in seconds
    },
    "archiver_settings": {
        "enable": true, // Enable archiver
        "engine": "postgresql", // Archiver engine, support PostgreSQL, MySQL, MSSQL
        "host": "127.0.0.1", // Archiver host
        "port": 5432, // Archiver port
        "username": "postgres", // Archiver username
        "password": "passw0rd", // Archiver password
        "database": "observer" // Archiver database
    },
    "server_settings": {
        "host": "0.0.0.0", // Web server host
        "port": 8073, // Web server port
        "cors": true, // Enable CORS
        "debug": false // Enable debug mode, /api/v1/devel endpoint will be available
    },
    "miniseed_settings": {
        "enable": false, // Enable MiniSEED archiver
        "path": "/data/miniseed", // MiniSEED archive path
        "lifecycle": 10 // MiniSEED lifecycle, in days
    },
    "seedlink_settings": {
        "enable": false,
        "host": "0.0.0.0",
        "port": 18000,
        "buffer": "/data/seedlink",
        "size": 1000
    } // Ignore this section due to it is not supported yet
}
```

## Runnning

 - On Windows, configuration file is located in the same directory as AnyShake Observer binary. You may run `observer.exe` without additional parameters.
 - On Linux, configuration file is usually located at /usr/local/etc/observer/config.json. Run `observer --config=/usr/local/etc/observer/config.json` in foreground or use other tools such as systemd to run AnyShake Observer as background process.
