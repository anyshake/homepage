---
sidebar_position: 2
---

# Quick Start

The AnyShake Observer needs to be used with AnyShake Explorer, and you need to configure AnyShake Observer after installing it.

## Prerequisites

Before you start, make sure you have the following:

 - AnyShake Observer is installed on your computer, version is `v3.0.0` or later.
 - You have installed any of the following databases: PostgreSQL, MySQL, or SQL Server, assuming the database engine is PostgreSQL, database name is `observer`, username is `postgres`, and password is `passw0rd`.
 - AnyShake Explorer is running in 24 bit mode, and hardware is connected to your PC, assuming the corresponding serial port is `/dev/ttyUSB0` (if you are using Windows, the serial port is something like `COM1`), baud rate is `115200`.

## Quick Configuration

Note that AnyShake has two hardware implementations, based on ESP8266 and STM32F103. When using ESP8266 with AnyShake Observer, the `explorer_settings.legacy` configuration field should be `true`. In this example, assuming the hardware is ESP8266 based AnyShake Explorer.

```json
{
    "station_settings": {
        "name": "AnyShake Station",
        "owner": "Lee",
        "region": "Asia",
        "country": "China",
        "city": "Beijing"
    },
    "location_settings": {
        "latitude": 39.9,
        "longitude": 116.4,
        "elevation": 50.0
    },
    "explorer_settings": {
        "dsn": "transport:///dev/ttyUSB0?baudrate=115200",
        "engine": "serial",
        "legacy": false
    },
    "sensor_settings": {
        "frequency": 4.5,
        "sensitivity": 28.8,
        "velocity": true,
        "vref": 5.0,
        "fullscale": 10.0,
        "resolution": 24
    },
    "stream_settings": {
        "network": "AS",
        "station": "SHAKE",
        "location": "00",
        "channel": "EH"
    },
    "ntpclient_settings": {
        "host": "pool.ntp.org",
        "port": 123
    },
    "database_settings": {
        "engine": "postgresql",
        "host": "127.0.0.1",
        "port": 5432,
        "username": "postgres",
        "password": "passw0rd",
        "database": "observer"
    },
    "server_settings": {
        "host": "0.0.0.0",
        "port": 8073,
        "cors": true,
        "debug": true,
        "rate": 30
    },
    "logger_settings": {
        "level": "info",
        "rotation": 7,
        "lifecycle": 3,
        "size": 5,
        "dump": "/home/yuki/observer.log"
    },
    "services_settings": {
        "miniseed": {
            "enable": true,
            "lifecycle": 10,
            "path": "/home/yuki/miniseed"
        },
        "archiver": {
            "enable": true,
            "lifecycle": 10
        },
        "forwarder": {
            "enable": true,
            "host": "0.0.0.0",
            "port": 30000
        },
        "seedlink": {
            "enable": true,
            "host": "0.0.0.0",
            "port": 18000
        }
    }
}
```

## Run AnyShake Observer

 - On Windows, configuration file is located in the same directory as AnyShake Observer binary. You may run `observer.exe` without additional parameters.
 - On Linux, configuration file is usually located at `/usr/local/etc/observer/config.json`. Run `observer --config=/usr/local/etc/observer/config.json` in foreground or use other tools such as systemd to run AnyShake Observer as background process.
