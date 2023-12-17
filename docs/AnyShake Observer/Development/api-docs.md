---
sidebar_position: 2
---

# API Documentation

AnyShake Observer offers a RESTful API that allows users to access data and control the system. This API documentation, generated using [Swagger](https://swagger.io/), is embedded within the AnyShake Observer's binary file.

## Enable Debug Mode

**It's strongly recommended to *disable* debug mode in production environment!**

To enable debug mode, set the `server_settings.debug` option to `true` in the configuration file. For example:

```json
{
    // ... Your other configurations
    "server_settings": {
        "host": "0.0.0.0",
        "port": 8073,
        "cors": true,
        "debug": true // Enables debug mode
    }
}
```

## Visit API Documentation

Once debug mode is enabled, access the API documentation by visiting the `/api/v1/devel` endpoint.

For instance, with a base URL of `http://localhost:8073`, access the API documentation at `http://localhost:8073/api/v1/devel`.

## OpenAPI Specification

The OpenAPI document is available at the `/api/v1/devel/doc.json` endpoint, allowing you to import it into various API platforms.

For example, with the same base URL, retrieve the OpenAPI document at `http://localhost:8073/api/v1/devel/doc.json`.

For API testing, We recommend using [Hoppscotch](https://hoppscotch.io/), an open-source & powerful API development environment.
