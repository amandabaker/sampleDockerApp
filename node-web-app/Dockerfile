# Dockerfile

FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g bower

EXPOSE 80

# Install app dependencies
COPY . /usr/src/app
RUN npm install
RUN bower --allow-root install

# Bundle app source
CMD [ "npm", "start" ]
