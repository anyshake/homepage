---
sidebar_position: 4
---

# Headless Mode

For some reasons, you may want to run AnyShake Observer without its web UI. In this case, you can have AnyShake Observer provide only the back-end APIs, hosting your own front-end dist on Nginx, Apache or Caddy.

To use AnyShake Observer in headless mode, you can set up a reverse proxy to forward requests to AnyShake Observer's back-end APIs. Assuming that your URL of AnyShake Observer is `https://127.0.0.1:8073`, and you want to host your front-end dist on `https://example.org`, an Nginx example is given as follows:

```
server {
    listen 80;
    server_name example.org;

    location / {
        index index.html;
        root /path/to/your/dist;
    }

    location /api {
        proxy_pass https://127.0.0.1:8073/api;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header Connection "upgrade";
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```
