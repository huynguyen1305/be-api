import { NextFunction, Request, Response } from 'express';
import { logger } from '../configs/winston';

export default function loggerAPI(req: Request, res: Response, next: NextFunction) {
  logger.info(
    JSON.stringify({
      _startTime: new Date(Date.now()).toLocaleString('vi-vn'),
      'request-ip': req.ip,
      originalUrl: req.originalUrl,
      method: req.method,
      header: req.headers,
      body: req.body,
      params: req.params,
      query: req.query,
    }),
  );

  next();
}
