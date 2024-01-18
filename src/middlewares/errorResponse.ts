import { NextFunction, Request, Response } from 'express';
import { APIError } from '../utils/BaseError';
import { HttpStatusCode } from '../constants';

export default function errorResponse(error: APIError, req: Request, res: Response, next: NextFunction) {
  try {
    if (error instanceof APIError !== true) {
      res.status(HttpStatusCode.INTERNAL_SERVER).json({
        name: error.name,
        message: 'INTERNAL SERVER ERROR',
        error: 'INTERNAL SERVER ERROR',
        code: HttpStatusCode.INTERNAL_SERVER,
        stack: undefined,
      });
    } else
      res.status(error.httpCode).json({
        name: error.name,
        message: error.message,
        error: error.message,
        code: error.httpCode,
        stack: undefined,
      });
  } catch (error) {
    next(error);
  }
}
