FROM php:8.0.2-fpm-alpine3.13

# expose port for nginx
EXPOSE 80

# install nginx & php
RUN apk update \
    && apk --no-cache add supervisor nginx zip ffmpeg graphicsmagick freetype libpng libjpeg-turbo freetype-dev libpng-dev libjpeg-turbo-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd exif \
    && mkdir -p /run/nginx /var/www/html /var/userfiles-ro /var/h5ai/_h5ai

# copy entrypoint & supervisor
COPY docker/entrypoint.sh /etc/entrypoint.sh
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# copy nginx config
COPY docker/default.conf /etc/nginx/http.d/default.conf

# copy h5ai files
COPY build/_h5ai /var/h5ai/_h5ai

ENTRYPOINT ["sh", "/etc/entrypoint.sh"]
