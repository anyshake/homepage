---
sidebar_position: 7
---

# Database Settings

 - Key: `database_settings`
 - Description: Define the database settings for storing seismic data

## Fields

### engine

 - Type: `string`
 - Description: Database engine, available values are:
    - PostgreSQL: `postgresql`, `postgres`
    - MariaDB / MySQL: `mysql`, `mariadb`
    - Microsoft SQL Server: `mssql`, `sqlserver`
    - SQLite: `sqlite`, `sqlite3`

### host

 - Type: `string`
 - Description: Database host, empty string if using SQLite.

### port

 - Type: `int`
 - Description: Database port, set to `0` if using SQLite.

### username

 - Type: `string`
 - Description: Database username, empty string if using SQLite.

### password

 - Type: `string`
 - Description: Database password, empty string if using SQLite.

### database

 - Type: `string`
 - Description: Database name, set file path if using SQLite.

## Example

```json
{
    "archiver_settings": {
        "engine": "postgresql",
        "host": "127.0.0.1",
        "port": 5432,
        "username": "postgres",
        "password": "passw0rd",
        "database": "observer"
    }
}
```
