import { DatabaseService, IDatabaseService } from "../database/databaseService";

// TODO: implement tests
describe("Database service", () => {
  let databaseService: IDatabaseService;

  beforeEach(() => {
    databaseService = {
      findRecords: jest.fn(),
    };

    databaseService = new DatabaseService();
  });

  describe("Records", () => {
      // TODO: Records mocks


      // TODO: beforeEach
      beforeEach(async () => {

      })

      it('can be retrieved correctly', () => {

      })

      it('returns empty array of records if does not exist', () => {

      })
  })

});
