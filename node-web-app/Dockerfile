# Dockerfile

FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
COPY server.js /usr/src/app
RUN npm install

# Bundle app source
EXPOSE 80
CMD [ "npm", "start" ]
