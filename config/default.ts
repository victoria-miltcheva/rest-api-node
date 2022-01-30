export default {
  port: 80, // Heroku exposes port 80
  mongodb: {
    uri: process.env.MONGODB_URI
  }
};
