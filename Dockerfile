FROM node:8

WORKDIR /usr/src

# Install app dependencies from package and package-lock
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8050
CMD [ "npm", "start" ]
