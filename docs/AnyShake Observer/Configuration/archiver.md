---
sidebar_position: 6
---

# Archiver Settings

 - Key: `archiver_settings`
 - Description: Archiver settings for AnyShake Observer

This object configures settings for the optional archiver component. The archiver stores raw geophone data by timestamp to database, but isn't necessary for running the AnyShake Observer.

## Fields

### enabled

 - Type: `bool`
 - Description: Whether to enable the archiver, if set to `false`, the History Waveform will not be available

### engine

 - Type: `string`
 - Description: Database engine, available values are `postgresql`, `mysql`, `mssql`

### host

 - Type: `string`
 - Description: Database host

### port

 - Type: `int`
 - Description: Database port

### username

 - Type: `string`
 - Description: Database username

### password

 - Type: `string`
 - Description: Database password

### database

 - Type: `string`
 - Description: Database name

### lifecycle

 - Type: `int`
 - Description: Lifecycle of records, in days. Set to 0 to disable

## Example

```json
{
    "archiver_settings": {
        "enable": true,
        "engine": "postgresql",
        "host": "127.0.0.1",
        "port": 5432,
        "username": "postgres",
        "password": "passw0rd",
        "database": "observer",
        "lifecycle": 10
    }
}
```
