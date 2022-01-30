# Adapted from https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:16.13.2-alpine3.15

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
RUN npm i

# Bundle app source
COPY . .

# Transpile TypeScript files
RUN npx tsc -p ./tsconfig.json

EXPOSE 8080

CMD [ "npm", "start" ]
