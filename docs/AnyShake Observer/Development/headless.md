---
sidebar_position: 4
---

# Headless Mode

For some reasons, you may want to run AnyShake Observer without its embeded web UI. In this case, you can have AnyShake Observer provide only the backend APIs, hosting your own frontend assets on Nginx, Apache or Caddy.

To use AnyShake Observer in headless mode, you can set up a reverse proxy to forward requests to AnyShake Observer's back-end APIs. Assuming that your URL of AnyShake Observer is `http://127.0.0.1:8073`, and you want to host your frontend assets on `https://example.org`, here are some example configurations.

## Nginx

```
server {
    listen 80;
    server_name example.org;

    location / {
        index index.html;
        root /path/to/your/dist;
    }

    location /api {
        proxy_pass http://127.0.0.1:8073/api;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header Connection "upgrade";
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## Apache

```
<VirtualHost *:80>
    ServerName example.org

    DocumentRoot /path/to/your/dist
    <Directory /path/to/your/dist>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ProxyPreserveHost On
    ProxyPass /api http://127.0.0.1:8073/api
    ProxyPassReverse /api http://127.0.0.1:8073/api

    RequestHeader set X-Real-IP "%{REMOTE_ADDR}s"
    RequestHeader set X-Forwarded-For "%{REMOTE_ADDR}s"

</VirtualHost>
```

## Caddy

```
example.org {
    root * /path/to/your/dist
    file_server

    @api {
        path /api*
    }
    reverse_proxy @api http://127.0.0.1:8073 {
        header_up Host {host}
        header_up X-Real-IP {remote}
        header_up X-Forwarded-For {remote}
        header_up Connection {>Connection}
        header_up Upgrade {>Upgrade}
    }
}
```
