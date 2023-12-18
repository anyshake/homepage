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
 - Description: Database engine, available values are `postgresql`, `mysql`, `sqlite`, `mssql`

### host

 - Type: `string`
 - Description: Database host, leave it empty if you're using SQLite

### port

 - Type: `int`
 - Description: Database port, leave it empty if you're using SQLite

### username

 - Type: `string`
 - Description: Database username, leave it empty if you're using SQLite

### password

 - Type: `string`
 - Description: Database password, leave it empty if you're using SQLite

### database

 - Type: `string`
 - Description: Database name, set it to the path of SQLite database file if you're using SQLite

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
        "database": "observer"
    }
}
```
