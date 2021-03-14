# FROM gcr.io/google_appengine/nodejs
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install 

EXPOSE 3001

CMD ["npm", "run", "dev"]