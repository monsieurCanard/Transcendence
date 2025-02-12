FROM node:18-alpine

# RUN apk add --no-cache openssl

RUN mkdir -p /app

WORKDIR /app

COPY ./files/package.json .

RUN npm install

COPY ./files/ ./files/

EXPOSE 5173

CMD ["npm", "run", "dev"]