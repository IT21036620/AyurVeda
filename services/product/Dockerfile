FROM node

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3008

CMD ["npm","start"]