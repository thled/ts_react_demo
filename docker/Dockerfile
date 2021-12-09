FROM node:16.13.1-alpine

USER node
WORKDIR /app

ENV NODE_ENV=development
COPY package.json yarn.lock ./
RUN yarn install

COPY . .

