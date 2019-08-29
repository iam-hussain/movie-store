FROM node:10.15.0-alpine

EXPOSE 5000
EXPOSE 3000

WORKDIR /home/client

COPY package.json /home/client/
COPY package-lock.json /home/client/

# ENV NODE_ENV=development

RUN npm ci

COPY . /home/client

RUN npm run build

# RUN npm run start
RUN npm install -g serve

CMD ["serve", "-s", "build"]
