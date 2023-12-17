---
sidebar_position: 3
---

# Headless Architecture

For some reasons, you may want to run AnyShake Observer without its embedded frontend server. In this case, you can have AnyShake Observer provide only the back-end interface, hosting the front-end on Nginx, Apache or Caddy.

## Nginx Configuration

Here is an example of Nginx configuration, assuming that the AnyShake Observer is running on `http://localhost:8073`, your dist frontend root directory is `/var/www/html/anyshake`, the Nginx is listening on port `80` and the domain name is `localhost`.

```
TODO
```

The final URL will be `http://localhost/anyshake`.

## Apache Configuration

```
TODO
```

## Caddy Configuration

```
TODO
```
