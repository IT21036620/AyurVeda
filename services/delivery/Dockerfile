FROM node

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3004

CMD ["npm","start"]