FROM node:20.9.0-alpine3.18

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 8080

CMD [ "node", "/home/app/index.js" ]