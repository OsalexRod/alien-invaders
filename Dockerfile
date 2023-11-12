FROM node:20.9.0-alpine3.18

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN wget https://github.com/processing/p5.js/releases/download/v1.8.0/p5.zip \
  && unzip p5.zip \
  && mv p5 public/p5js \
  && rm p5.zip

ENV NODE_SERVER_PORT=""

EXPOSE $NODE_SERVER_PORT

CMD [ "node", "/usr/src/app/index.js" ]
