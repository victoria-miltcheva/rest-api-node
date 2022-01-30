import { DatabaseService, IDatabaseService } from '../database/databaseService';
import { Request, Response, NextFunction } from 'express';
import Code from '../constants/code';
import Message from '../constants/message';
import { Records } from '../database/records/records';

class RecordsController {
  databaseService: IDatabaseService;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  async findRecords(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response<any, Record<string, any>>> {
    try {
      throw Error('fdsfsdif');
      // const records = await this.databaseService.findRecords(
      //   new Date(req.body.startDate),
      //   new Date(req.body.endDate),
      //   req.body.minCount,
      //   req.body.maxCount
      // );

      const records: Records = [];

      return res
        .status(200)
        .json({ code: Code.Success, msg: Message.Success, records });
    } catch (error) {
      next(error);
    }
  }
}

export default RecordsController;
