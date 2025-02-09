FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y nginx openssl

COPY conf/nginx.conf /etc/nginx/sites-enabled/default

COPY script/nginx_certif.sh /usr/local/bin/nginx_certif.sh

RUN chmod +x /usr/local/bin/nginx_certif.sh

ENTRYPOINT [ "/usr/local/bin/nginx_certif.sh" ]

CMD ["nginx", "-g", "daemon off;"]