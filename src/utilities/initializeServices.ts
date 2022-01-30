import { DatabaseService } from '../database/databaseService';

type Services = {
  databaseService: DatabaseService;
};

function initializeServices(): Services {
  const databaseService = new DatabaseService();
  return { databaseService };
}

export default initializeServices;
