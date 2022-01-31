# rest-node-api

A REST API exercise created with Node.js, Express, and MongoDB. For type safety and maintainability, it has been written in TypeScript.

## Running locally

### Pre-requisites

- [Node.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)
- Recommended: [ESLint VS Code plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Recommended: [Prettier VS Code plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Recommended: an API client for testing, such as [Insomnia](https://insomnia.rest/)

### Configuration

1. Create a `config/local.ts` file. This file is ignored by Git.
2. Add the following to it, replacing the value of `mongodb.uri` with your MongoDB server URI.

```typescript
export default {
  port: 8080,
  mongodb: {
    uri: 'INSERT_MONGODB_SERVER_URI'
  }
};
```

### Commands

#### Non-Docker:

Run the following commands to install dependencies and set up the project:

```bash
npm i               # Install dependencies
npm run dev         # Start the project
```

Endpoint: `localhost:8080/records` (POST)

#### Docker:

Run the following commands to build a Docker image and run it on your local machine:

```bash
PORT=8080
docker build . -t <image_name>
docker run -p 49160:8080 -d <image_name>
```

Endpoint: `localhost:49160/records` (POST)

## Project structure

```bash
/config                             # Application secrets and environment-dependent           configurations go here
/src                                # Contains the main code
    /controllers                    # Controller layer
        recordsController.ts
    /constants                      # Non-environment-dependent constants
    /database                       # Database Access layer
        /records                    # Represents Records collection
            records.ts              # Data Transfer Object
            recordsModel.ts         # Records Mongoose model
        databaseService.ts          # Data Access Object
    /fixtures                       # Mock objects used for testing
    /middleware                     # HTTP server middleware
    /routes                         # HTTP server routes
    /utilities                      # Utility functions
    server.ts                       # Entrypoint
```
