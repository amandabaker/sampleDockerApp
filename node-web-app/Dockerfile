# Dockerfile

FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app
RUN npm install
RUN npm install -g bower
RUN bower --allow-root install

# Bundle app source
EXPOSE 80
CMD [ "npm", "start" ]
