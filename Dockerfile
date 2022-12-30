FROM node:16-alpine as build-step
WORKDIR /app

COPY ./package.json ./
COPY ./src ./src
COPY ./public ./public

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

EXPOSE $PORT

CMD ["npm", "start"]