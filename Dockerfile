FROM node:18.12.1

WORKDIR /app

COPY . .

RUN mkdir -p access/info
RUN mkdir -p audit/info
RUN mkdir -p application/info

RUN mkdir -p logs/error

RUN npm install

RUN npm run build

CMD node dist/main.js
