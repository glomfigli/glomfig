FROM node:18.14.2-bullseye-slim

WORKDIR /usr/src/glomfig/client
COPY package.json package-lock.json ./
RUN npm install

CMD ["npm", "start"]
