import express, { Router, RouterOptions } from "express";
import { RecordsController } from "../controllers/recordsController";
import { DatabaseService } from "../database/databaseService";

class RecordsRouter {
  router: Router;
  controller: RecordsController;

  constructor(databaseService: DatabaseService) {
    this.router = express.Router();
    this.controller = new RecordsController(databaseService);
    this.configure();
  }

  private configure(): void {
    this.router.post("/records", this.controller.findRecords.bind(this.controller));
  }
}

export { RecordsRouter };
