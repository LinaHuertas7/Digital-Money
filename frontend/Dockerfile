FROM node:20

WORKDIR /var/www/frontend

RUN npm init -y

COPY package*.json ./

RUN npm install

COPY . .
#RUN npm init

EXPOSE 3000
#CMD [ "npm", "run", "dev" ]