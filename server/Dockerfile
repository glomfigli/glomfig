FROM node:18.14.2-bullseye-slim

WORKDIR /usr/src/glomfig/server
COPY . .
RUN npm install

CMD ["npm", "run", "watch"]
