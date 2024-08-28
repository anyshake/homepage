---
sidebar_position: 8
---

# Server Settings

 - Key: `server_settings`
 - Description: Define the embed web server listening address and port

This object manages server settings for AnyShake Observer.

## Fields

### host

 - Type: `string`
 - Description: Server host to bind.

### port

 - Type: `int`
 - Description: Server port to listen.

### cors

 - Type: `bool`
 - Description: Enable CORS (Cross-Origin Resource Sharing) headers.

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
