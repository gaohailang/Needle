This is a project drived with WDJ-Generator
===========

### Development Setup

```
location /needle {
    rewrite ^/needle/(.*)$ /$1 break;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_pass http://127.0.0.1:1338/;
}
```