#!/bin/bash

if [ ! -f /etc/ssl/certs/nginx.crt ]; then
	openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/ssl/private/nginx.key -out /etc/ssl/certs/nginx.crt -subj "/C=FR/ST=Paris/L=42/O=aiwjd/CN=ajkwhd";
	echo "Nginx: Certificate and key are set up!"
else 
	echo "Nginx: Certificate and key already exist"
fi

echo "Nginx set up ! Starting Nginx"

exec "$@"