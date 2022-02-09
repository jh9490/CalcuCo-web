# Dockerfile
FROM node:16.13.2-alpine as base

# create destination directory
RUN mkdir -p /usr/src/calcuco-api
WORKDIR /usr/src/calcuco-api

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY .. /usr/src/calcuco-api
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install

FROM base as production

ENV NODE_PATH=./build

RUN npm run build


EXPOSE 2700
CMD [ "node", "start" ]