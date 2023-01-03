FROM node:9-slim
WORKDIR /code
COPY package.json ./code
RUN npm install
COPY  . /code
CMD ["npm" , "start"]



