// TODO: implement tests
import RecordsMiddleware from './recordsMiddleware';
import { getMockReq, getMockRes } from '@jest-mock/express';
import { Response } from 'express';

describe('Records middleware', () => {
  let req;
  let res: any;
  let nextFn: () => void;

  beforeEach(() => {
    req = getMockReq();
    res = getMockRes();
    nextFn = jest.fn();
  });

  describe('Body validation', () => {
    it('does not return when the body exists', () => {
      req = getMockReq({
        body: {
          minCount: 1,
          maxCount: 2,
          startDate: '2022-01-01',
          endDate: '2017-02-01'
        }
      });

      expect(RecordsMiddleware.validateBody(req, res, nextFn)).not.toReturn();
    });

    it('returns an error response when the body does not exist');
  });

  describe('validates date fields', () => {
    it('validates that the start date exists', () => {});
    it('validates the start date format', () => {});
    it('validates that the end date exists', () => {});
    it('validates the end date format', () => {});
    it('validates the date range', () => {});
  });

  describe('validates count fields', () => {
    it('validates that the min count exists', () => {});
    it('validates min count format', () => {});
    it('validates that the max count exists', () => {});
    it('validates the max count format', () => {});
    it('validates the count range', () => {});
  });
});
