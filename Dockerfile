# Pull the Apache PHP latest offical image from Docker Hub.
FROM php:apache
# Enable Apache URL Rewriting.
RUN a2enmod rewrite
# Configure PHP...
# 1 # Add (or duplicate thus override) some directives to the php.ini-development file.
ARG iniFile="/usr/local/etc/php/php.ini-development"
RUN echo ';@Override' >> "$iniFile"
RUN echo 'post_max_size = 50M' >> "$iniFile"
RUN echo 'upload_max_filesize = 50M' >> "$iniFile"
RUN echo 'date.timezone ="UTC"' >> "$iniFile"
# 2 # Set the php.ini-development file as actual php.ini file.
RUN cp "$iniFile" /usr/local/etc/php/conf.d/php.ini
# 3 # Install some needed PHP extensions...
# 3-1 # Update Linux packages from the default distribution repository.
RUN apt-get update
# 3-2 # Add the requested packages ("dev" version to be properly installed) to Linux...
# 3-2-1 # Requested by gd.
RUN apt-get install -y libfreetype-dev libjpeg62-turbo-dev libpng-dev libwebp-dev libzip-dev
# 3-2-2 # Requested by intl.
RUN apt-get install -y libicu-dev
# 3-3 # Install the PHP Core extensions (already compiled as listed by the command "php -m").
RUN  docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp	\
	&& docker-php-ext-install exif ftp gd intl pdo pdo_mysql zip
# 3-4 # Install the PECL (PHP Extension Community Library) extensions.
RUN pecl install xdebug && docker-php-ext-enable xdebug
