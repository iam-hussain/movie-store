FROM node:10.15.0-alpine

EXPOSE 1234

WORKDIR /home/server

COPY package.json /home/server/
COPY package-lock.json /home/server/

RUN npm ci

COPY . /home/server

CMD ["npm", "run", "start"]
