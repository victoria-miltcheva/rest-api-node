import { DatabaseService, IDatabaseService } from '../database/databaseService';
import { Request, Response, NextFunction } from 'express';

class RecordsController {
  databaseService: IDatabaseService;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  async findRecords(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<any, Record<string, any>>> {
    console.log('reached');
    // TODO: type error handling
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);
    const minCount: number = req.body.minCount;
    const maxCount: number = req.body.maxCount;

    const records = await this.databaseService.findRecords(
      startDate,
      endDate,
      minCount,
      maxCount
    );

    // TODO: use response model
    return res.status(200).json({ records });
  }
}

export { RecordsController };
