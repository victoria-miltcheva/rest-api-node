import express, { Request, Response, NextFunction, Application } from 'express';
import Code from '../constants/code';
import Message from '../constants/message';

class ErrorsMiddleware {
  logErrors(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err.me);
    next(err);
  }

  notFoundErrorHandler(req: Request, res: Response, next: NextFunction) {
    return res.status(404).json({
      code: Code.Failure,
      msg: Message.NotFoundError
    });
  }

  defaultErrorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if (res.headersSent) {
      return next(err);
    }

    return res.status(500).json({
      code: Code.Failure,
      msg: Message.InternalError
    });
  }
}

export default new ErrorsMiddleware();
