FROM nginx:latest
COPY dist/tele-frontend /usr/share/nginx/html
EXPOSE 80

# docker build -t teleservice-frontend .
# docker run -d -p 8080:80 teleservice-frontend