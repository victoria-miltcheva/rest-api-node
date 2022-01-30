# rest-node-api

A REST API exercise created with Node.js, Express, and MongoDB. For type safety and maintainability, it has been written in TypeScript.

## Running locally

### Pre-requisites

- [Node.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)
- Recommended: [ESLint VS Code plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Recommended: [Prettier VS Code plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Recommended: an API client for testing, such as [Insomnia](https://insomnia.rest/)

### Configuration

Add the following to `config/local.ts`, replacing the value of `mongodb.uri` with your MongoDB server URI. This file is ignored by Git.

```typescript
export default {
  port: 8081,
  mongodb: {
    uri: 'INSERT_MONGODB_SERVER_URI'
  }
};
```

### Commands

Run the following commands:

```bash
npm i               # Install dependencies
npm run dev         # Start the project
```

## Project structure

```bash
/config                             # Application secrets and environment-dependent           configurations go here
/src                                # Contains the main code
    /controllers                    # Controller layer
        recordsController.ts
    /constants                      # Non-environment-dependent constants
    /database                       # Database Access layer
        /records                    # Represents Records collection
            records.ts              # Records representation
            recordsModel.ts         # Records Mongoose model
        databaseService.ts
    /fixtures                       # Mock objects used for testing
    /middleware                     # HTTP server middleware
    /routes                         # HTTP server routes
    /utilities                      # Utility functions
    server.ts                       # Entrypoint
```
