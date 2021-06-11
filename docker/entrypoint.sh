#!/usr/bin/env bash

mkdir -p /tmp/overlay && \
mount -t tmpfs tmpfs /tmp/overlay && \
mkdir -p /tmp/overlay/upper && \
mkdir -p /tmp/overlay/work && \
mount -t overlay overlay -o lowerdir=/var/userfiles-ro:/var/h5ai,upperdir=/tmp/overlay/upper,workdir=/tmp/overlay/work /var/www/html

chown www-data:www-data /var/www/html -R

exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf