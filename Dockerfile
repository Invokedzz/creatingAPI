FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run

EXPOSE 8444

CMD ["npm", "start"]