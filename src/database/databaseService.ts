import { RecordsModel } from './records/recordsModel';
import { Records } from './records/records';
import { Aggregate } from 'mongoose';

interface IDatabaseService {
  findRecords(
    startDate: Date,
    endDate: Date,
    minCount: number,
    maxCount: number
  ): Promise<Records>;
}

class DatabaseService implements IDatabaseService {
  async findRecords(
    startDate: Date,
    endDate: Date,
    minCount: number,
    maxCount: number
  ): Promise<Records> {
    const records: Aggregate<Records> = RecordsModel.aggregate([
      {
        $match: {
          createdAt: {
            $gt: startDate,
            $lt: endDate
          }
        }
      },
      {
        $addFields: {
          totalCount: {
            $sum: '$counts'
          }
        }
      },
      {
        $match: {
          totalCount: {
            $gt: minCount,
            $lt: maxCount
          }
        }
      }
    ]);

    return records;
  }
}

export { IDatabaseService, DatabaseService };
