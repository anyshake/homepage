---
sidebar_position: 7
---

# Server Settings

 - Key: `server_settings`
 - Description: Server settings for AnyShake Observer

This object manages server settings for AnyShake Observer.

## Fields

### host

 - Type: `string`
 - Description: Server host

### port

 - Type: `int`
 - Description: Server port

### cors

 - Type: `bool`
 - Description: Enable CORS

### debug

 - Type: `bool`
 - Description: Enable debug mode, `/api/v1/devel` endpoint will be available

**It's strongly recommended to *disable* debug mode in production environment!**

## Example

```json
{
    "server_settings": {
        "host": "0.0.0.0",
        "port": 8073,
        "cors": true,
        "debug": false,
        "rate": 30
    }
}
