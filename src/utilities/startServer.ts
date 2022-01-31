import express, { Application } from 'express';
import initializeServices from './initializeServices';
import RecordsRouter from '../routes/recordsRouter';
import errorsMiddleware from '../middleware/errorsMiddleware';
import config from 'config';
import { connect } from 'mongoose';

async function startServer(): Promise<Application> {
  const server = express();

  // Parse the URL-encoded data with the querystring library
  server.use(express.urlencoded({ extended: false }));
  // Parse incoming requests with JSON payloads
  server.use(express.json());

  // Connect to DB
  await connect(config.get('mongodb.uri'), (err) => {
    if (err) {
      console.error('Failed to connect to database');
      throw err;
    }
  });

  // Services initialization
  const { databaseService } = initializeServices();

  // Configure routes
  const recordsRouter = new RecordsRouter(databaseService);
  server.use('/', recordsRouter.router);

  // Errors middleware
  server.use(errorsMiddleware.logErrors.bind(errorsMiddleware));
  server.use(errorsMiddleware.notFoundErrorHandler.bind(errorsMiddleware));
  server.use(errorsMiddleware.defaultErrorHandler.bind(errorsMiddleware));

  return server;
}

export default startServer;
