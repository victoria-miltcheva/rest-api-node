import { DatabaseService } from '../database/databaseService';
import { connect } from 'mongoose';
import config from 'config';

type Services = {
  databaseService: DatabaseService;
};

async function connectToDatabase(): Promise<void> {
  await connect(config.get('mongodb.uri'));
}

function initializeServices(): Services {
  const databaseService = new DatabaseService();
  const services = { databaseService };
  return services;
}

export { connectToDatabase, initializeServices };
