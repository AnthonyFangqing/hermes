FROM nginx:alpine
COPY . /usr/share/nginx/html/hermes/
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod -R 644 /usr/share/nginx/html/hermes/*.html /usr/share/nginx/html/hermes/*.css /usr/share/nginx/html/hermes/*.js /usr/share/nginx/html/hermes/*.md /usr/share/nginx/html/hermes/*.conf 2>/dev/null || true && \
    chmod -R 755 /usr/share/nginx/html/hermes/static /usr/share/nginx/html/hermes/projects && \
    find /usr/share/nginx/html/hermes -type f -exec chmod 644 {} + && \
    find /usr/share/nginx/html/hermes -type d -exec chmod 755 {} +
EXPOSE 80
