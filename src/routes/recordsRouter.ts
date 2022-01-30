import { Router } from 'express';
import RecordsController from '../controllers/recordsController';
import { DatabaseService } from '../database/databaseService';
import recordsMiddleware from '../middleware/recordsMiddleware';

class RecordsRouter {
  router: Router;
  controller: RecordsController;

  constructor(databaseService: DatabaseService) {
    this.router = Router();
    this.controller = new RecordsController(databaseService);
    this.configure();
  }

  private configure(): void {
    this.router.post('/records', [
      recordsMiddleware.validateBody.bind(recordsMiddleware),
      this.controller.findRecords.bind(this.controller)
    ]);
  }
}

export default RecordsRouter;
