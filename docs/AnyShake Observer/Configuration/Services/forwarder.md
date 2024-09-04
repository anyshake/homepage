---
sidebar_position: 3
---

# Forwarder Settings

 - Key: `forwarder_settings`
 - Description: Forwarder settings for AnyShake Observer

The AnyShake Observer provides a forwarder service that binds to a specific host and port to forward data to other services.

## Fields

### enabled

 - Type: `bool`
 - Description: Whether to enable the forwarder.

### host

 - Type: `string`
 - Description: Server host to bind.

### port

 - Type: `int`
 - Description: Server port to listen.

## Example

```json
{
    "services_settings": {
        "forwarder_settings": {
            "enable": true,
            "host": "0.0.0.0",
            "port": 30000
        }
    }
}
```
