import RecordsMiddleware from './recordsMiddleware';
import { getMockReq, getMockRes } from '@jest-mock/express';
import { Response } from 'express';
import Code from '../constants/code';
import Message from '../constants/message';

describe('Records middleware', () => {
  let req;
  let res: Response<any, Record<string, any>>;

  beforeEach(() => {
    res = getMockRes().res;
  });

  describe('validates that body exists', () => {
    it('does not send an error response when the body contains fields', async () => {
      req = getMockReq({
        body: {
          minCount: 1,
          maxCount: 2,
          startDate: '2022-01-01',
          endDate: '2017-02-01'
        }
      });

      await RecordsMiddleware.validateBodyExists(req, res);

      expect(res.status).not.toHaveBeenCalled();
      expect(res.send).not.toHaveBeenCalled();
    });

    it('sends an error response when the body is empty', async () => {
      req = getMockReq({ body: {} });

      await RecordsMiddleware.validateBodyExists(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        code: Code.Failure,
        msg: Message.ValidationErrorMissingBody
      });
    });
  });

  describe('validates date fields', () => {
    it('does not send an error response when the start date is correctly formatted', async () => {
      req = getMockReq({
        body: {
          startDate: '2022-01-01'
        }
      });

      await RecordsMiddleware.validateDate(
        'startDate',
        Message.ValidationErrorMissingStartDate,
        Message.ValidationErrorWrongFormatStartDate,
        req,
        res
      );

      expect(res.status).not.toHaveBeenCalled();
      expect(res.send).not.toHaveBeenCalled();
    });

    it('sends an error response when the start date is missing', async () => {
      req = getMockReq({
        body: {}
      });

      await RecordsMiddleware.validateDate(
        'startDate',
        Message.ValidationErrorMissingStartDate,
        Message.ValidationErrorWrongFormatStartDate,
        req,
        res
      );

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        code: Code.Failure,
        msg: Message.ValidationErrorMissingStartDate
      });
    });

    it('sends an error response when the start date is incorrectly formatted', async () => {
      req = getMockReq({
        body: {
          startDate: '2022-1-30'
        }
      });

      await RecordsMiddleware.validateDate(
        'startDate',
        Message.ValidationErrorMissingStartDate,
        Message.ValidationErrorWrongFormatStartDate,
        req,
        res
      );

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        code: Code.Failure,
        msg: Message.ValidationErrorWrongFormatStartDate
      });
    });

    it('does not send an error response when the end date is correctly formatted', async () => {
      req = getMockReq({
        body: {
          endDate: '2022-01-01'
        }
      });

      await RecordsMiddleware.validateDate(
        'endDate',
        Message.ValidationErrorMissingEndDate,
        Message.ValidationErrorWrongFormatEndDate,
        req,
        res
      );

      expect(res.status).not.toHaveBeenCalled();
      expect(res.send).not.toHaveBeenCalled();
    });

    it('sends an error response when the end date is missing', async () => {
      req = getMockReq({
        body: {}
      });

      await RecordsMiddleware.validateDate(
        'startDate',
        Message.ValidationErrorMissingEndDate,
        Message.ValidationErrorWrongFormatEndDate,
        req,
        res
      );

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        code: Code.Failure,
        msg: Message.ValidationErrorMissingEndDate
      });
    });

    it('sends an error response when the end date is incorrectly formatted', async () => {
      req = getMockReq({
        body: {
          endDate: '2022-1-30'
        }
      });

      await RecordsMiddleware.validateDate(
        'endDate',
        Message.ValidationErrorMissingEndDate,
        Message.ValidationErrorWrongFormatEndDate,
        req,
        res
      );

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        code: Code.Failure,
        msg: Message.ValidationErrorWrongFormatEndDate
      });
    });
  });

  describe('validates count fields', () => {
    it('does not send an error response when the min count is correctly formatted', async () => {
      req = getMockReq({
        body: {
          minCount: 1
        }
      });

      await RecordsMiddleware.validateCount(
        'minCount',
        Message.ValidationErrorMissingMinCount,
        Message.ValidationErrorWrongFormatMinCount,
        req,
        res
      );

      expect(res.status).not.toHaveBeenCalled();
      expect(res.send).not.toHaveBeenCalled();
    });

    it('sends an error response when the min count is missing ', async () => {
      req = getMockReq({
        body: {}
      });

      await RecordsMiddleware.validateDate(
        'minCount',
        Message.ValidationErrorMissingMinCount,
        Message.ValidationErrorWrongFormatMinCount,
        req,
        res
      );

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        code: Code.Failure,
        msg: Message.ValidationErrorMissingMinCount
      });
    });

    it('sends an error response when the min count is incorrectly formatted', async () => {
      req = getMockReq({
        body: {
          minCount: '1'
        }
      });

      await RecordsMiddleware.validateDate(
        'minCount',
        Message.ValidationErrorMissingMinCount,
        Message.ValidationErrorWrongFormatMinCount,
        req,
        res
      );

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        code: Code.Failure,
        msg: Message.ValidationErrorWrongFormatMinCount
      });
    });

    it('does not send an error response when the max count is correctly formatted', async () => {
      req = getMockReq({
        body: {
          maxCount: 100
        }
      });

      await RecordsMiddleware.validateCount(
        'maxCount',
        Message.ValidationErrorMissingMaxCount,
        Message.ValidationErrorWrongFormatMaxCount,
        req,
        res
      );

      expect(res.status).not.toHaveBeenCalled();
      expect(res.send).not.toHaveBeenCalled();
    });

    it('sends an error response when the max count is missing ', async () => {
      req = getMockReq({
        body: {}
      });

      await RecordsMiddleware.validateDate(
        'maxCount',
        Message.ValidationErrorMissingMaxCount,
        Message.ValidationErrorWrongFormatMaxCount,
        req,
        res
      );

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        code: Code.Failure,
        msg: Message.ValidationErrorMissingMaxCount
      });
    });

    it('sends an error response when the max count is incorrectly formatted', async () => {
      req = getMockReq({
        body: {
          maxCount: '100'
        }
      });

      await RecordsMiddleware.validateDate(
        'maxCount',
        Message.ValidationErrorMissingMaxCount,
        Message.ValidationErrorWrongFormatMaxCount,
        req,
        res
      );

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        code: Code.Failure,
        msg: Message.ValidationErrorWrongFormatMaxCount
      });
    });
  });
});
