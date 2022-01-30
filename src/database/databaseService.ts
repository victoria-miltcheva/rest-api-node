import { RecordsModel } from './records/recordsModel';
import { Aggregate } from 'mongoose';
import { Records } from '../constants/record';

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
      },
      {
        $project: {
          _id: false,
          key: true,
          createdAt: true,
          totalCount: true
        }
      }
    ]);

    return records;
  }
}

export { IDatabaseService, DatabaseService };
