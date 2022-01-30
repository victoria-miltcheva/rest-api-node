# rest-node-api

A REST API exercise created with Node.js, Express, and MongoDB. For type safety and maintainability, it has been written in TypeScript.

## Running locally

### Pre-requisites

- [Node.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)
- Not required, but recommended: an API client for testing, such as [Insomnia](https://insomnia.rest/)

### Configuration

Add the following to `config/local.ts`, replacing the value of `mongodb.uri` with your MongoDB server URI. This file is ignored by Git.

```typescript
export default {
  port: 8081,
  mongodb: {
    uri: "INSERT_MONGODB_SERVER_URI",
  },
};
```

### Commands

Run the following commands:

```bash
npm i               # Install dependencies
npm run dev         # Start the project
```
