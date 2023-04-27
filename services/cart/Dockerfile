FROM node

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm","start"]