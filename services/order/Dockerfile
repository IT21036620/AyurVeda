FROM node

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3006

CMD ["npm","start"]