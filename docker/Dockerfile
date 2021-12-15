FROM node:16.13.1-alpine

USER node
WORKDIR /app

ENV NODE_ENV=development
COPY package.json yarn.lock ./
RUN yarn install

ENV REACT_APP_API_URL=http://localhost:3001

COPY . .

