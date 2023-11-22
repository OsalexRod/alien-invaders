FROM node:20.9.0-alpine3.18

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN wget https://github.com/processing/p5.js/releases/download/v1.8.0/p5.zip \
  && unzip p5.zip \
  && mv p5 public/p5js \
  && rm p5.zip

RUN mkdir -p public/imagenes \
  && wget --no-check-certificate "https://drive.google.com/uc?export=download&id=1R74U-2Sbto8dUuQUznARHs7WJIrdWMkb" -O ./public/imagenes/enemigo.svg \
  && wget --no-check-certificate "https://drive.google.com/uc?export=download&id=1Mzc-m_OCFH21sTHehpLg97TecV5baAwk" -O ./public/imagenes/nave.png

ENV NODE_SERVER_PORT=""

EXPOSE $NODE_SERVER_PORT

CMD [ "node", "/usr/src/app/index.js" ]
