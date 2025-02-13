FROM node:22-alpine

RUN mkdir -p /app

WORKDIR /app

COPY ./files/package.json .

RUN npm install

COPY ./files/ ./files/

CMD ["npm", "run", "dev"]