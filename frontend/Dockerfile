FROM node:16.9.1-alpine3.14
WORKDIR /src
COPY ./ ./
COPY package.json ./
COPY package-lock.json ./
RUN npm install
EXPOSE 3000
CMD ["npm","run","start"]