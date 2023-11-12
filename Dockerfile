FROM node:20.9.0-alpine3.18

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

ENV NODE_SERVER_PORT=""

EXPOSE $NODE_SERVER_PORT

CMD [ "node", "/usr/src/app/index.js" ]
