import { DatabaseService, IDatabaseService } from '../database/databaseService';
import { RecordsController } from './recordsController';

// TODO: implement tests
describe('Records controller', () => {
  let recordsController: RecordsController;
  let databaseService: IDatabaseService;

  beforeEach(() => {
    databaseService = {
      findRecords: jest.fn()
    };

    recordsController = new RecordsController(databaseService);
  });

  describe('find records', () => {});

  test('returns records when they exist', () => {
    // FIXME: add parameters
    // const records = recordsController.findRecords();
    // expect(records).toBeDefined();
  });

  test('returns empty array when records not found', () => {});
});
