import { Request, Response, NextFunction } from 'express';
import Code from '../constants/code';
import Message from '../constants/message';
import { dateRegex } from '../constants/regex';

class RecordsMiddleware {
  async validateBody(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    this.validateBodyExists(req, res);

    this.validateDate(
      'startDate',
      Message.ValidationErrorMissingStartDate,
      Message.ValidationErrorWrongFormatStartDate,
      req,
      res
    );
    this.validateDate(
      'endDate',
      Message.ValidationErrorMissingEndDate,
      Message.ValidationErrorWrongFormatEndDate,
      req,
      res
    );
    this.validateStartBeforeEndDate('startDate', 'endDate', req, res);

    this.validateCount(
      'minCount',
      Message.ValidationErrorMissingMinCount,
      Message.ValidationErrorWrongFormatMinCount,
      req,
      res
    );
    this.validateCount(
      'maxCount',
      Message.ValidationErrorMissingMaxCount,
      Message.ValidationErrorWrongFormatMaxCount,
      req,
      res
    );
    this.validateMinBeforeMaxCount('minCount', 'maxCount', req, res);

    next();
  }

  validateBodyExists(
    req: Request,
    res: Response
  ): Response<any, Record<string, any>> | void {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .send({ code: Code.Failure, msg: Message.ValidationErrorMissingBody });
    }
  }

  validateKeyExists(
    key: string,
    msg: Message,
    req: Request,
    res: Response
  ): Response<any, Record<string, any>> | void {
    if (!req.body[key] || (req.body[key] && req.body[key] === undefined)) {
      return res.status(400).send({
        code: Code.Failure,
        msg
      });
    }
  }

  validateStartBeforeEndDate(
    startDateKey: string,
    endDateKey: string,
    req: Request,
    res: Response
  ): Response<any, Record<string, any>> | void {
    const startDate = new Date(req.body[startDateKey]);
    const endDate = new Date(req.body[endDateKey]);

    if (startDate > endDate) {
      return res.status(400).send({
        code: Code.Failure,
        msg: Message.ValidationStartLTEndDate
      });
    }
  }

  validateMinBeforeMaxCount(
    minCountKey: string,
    maxCountKey: string,
    req: Request,
    res: Response
  ): Response<any, Record<string, any>> | void {
    const minCount = req.body[minCountKey];
    const maxCount = req.body[maxCountKey];

    if (minCount > maxCount) {
      return res.status(400).send({
        code: Code.Failure,
        msg: Message.ValidateMinCountLTEMaxCount
      });
    }
  }

  validateDate(
    key: string,
    missingKeyMessage: Message,
    wrongFormatMessage: Message,
    req: Request,
    res: Response
  ): Response<any, Record<string, any>> | void {
    this.validateKeyExists(key, missingKeyMessage, req, res);

    const value = req.body[key];

    if (typeof value !== 'string' || !dateRegex.test(value)) {
      return res.status(400).send({
        code: Code.Failure,
        msg: wrongFormatMessage
      });
    }
  }

  validateCount(
    key: string,
    missingKeyMessage: Message,
    wrongFormatMessage: Message,
    req: Request,
    res: Response
  ): Response<any, Record<string, any>> | void {
    this.validateKeyExists(key, missingKeyMessage, req, res);

    const value = req.body[key];

    if (typeof value !== 'number') {
      return res.status(400).send({
        code: Code.Failure,
        msg: wrongFormatMessage
      });
    }
  }
}

export default new RecordsMiddleware();
