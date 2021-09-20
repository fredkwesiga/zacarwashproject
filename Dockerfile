
FROM node:14.17.1

WORKDIR /zacarwash

COPY package*.json .

RUN npm install

COPY . .

CMD node server.js