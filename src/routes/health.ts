import express, { IRouter, NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '../constants/httpStatusCode';
import createResponse from '../utils/createResponse';
import mongoose from 'mongoose';

const healthRoute: IRouter = express.Router();

healthRoute.use('/', (_req: Request, res: Response, next: NextFunction) => {
  try {
    const healthcheck = {
      uptime: `${Math.round(process.uptime())} second(s)`,
      database: mongoose.connection.readyState === 1 ? 'OK' : 'ERROR',
      message: 'OK',
      timestamp: new Date(),
    };

    res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, message: 'OK', data: healthcheck }));
  } catch (error) {
    next(error);
  }
});
export default healthRoute;
