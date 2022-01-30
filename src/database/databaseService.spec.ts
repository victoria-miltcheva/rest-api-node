import { DatabaseService, IDatabaseService } from '../database/databaseService';

// TODO: implement tests

describe('Database service', () => {
  let databaseService: IDatabaseService;

  beforeEach(() => {
    databaseService = {
      findRecords: jest.fn()
    };

    databaseService = new DatabaseService();
  });

  describe('Records', () => {
    // TODO: Records mocks

    beforeEach(async () => {});

    it('can be filtered correctly', () => {});

    it('returns empty array of records if no matches found', () => {});
  });
});
