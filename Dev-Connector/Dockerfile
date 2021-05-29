FROM mongo-express:latest AS prodbuild

MAINTAINER "anoop.techstorm@gmail.com"

WORKDIR /apps

COPY package.json .

COPY ./  .

CMD ["npm","run","prod"]

EXPOSE 3000

FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the static content to /usr/share/nginx/html
COPY --from=prodbuild /apps/client/build /usr/share/nginx/html

EXPOSE  82

ENTRYPOINT ["nginx", "-g", "daemon off;"]
