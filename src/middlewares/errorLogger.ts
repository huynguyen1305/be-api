import { NextFunction, Request, Response } from 'express';
import { APIError } from '../utils/BaseError';
import { logger } from '../configs/winston';

export default function errorLogger(error: APIError, req: Request, res: Response, next: NextFunction) {
  logger.error(
    JSON.stringify({
      _startTime: new Date(Date.now()).toLocaleString('vi-vn'),
      'request-ip': req.ip,
      originalUrl: req.originalUrl,
      method: req.method,
      header: req.headers,
      body: req.body,
      params: req.params,
      query: req.query,
      name: error.name,
      error: error.message,
      code: error.httpCode,
      stack: error.stack,
    }),
  );
  next(error);
}
