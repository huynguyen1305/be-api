import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError } from 'zod';
import { HttpStatusCode } from '../constants/httpStatusCode';
import { APIError } from '../utils/BaseError';

export const validate = (schema: AnyZodObject) => async (req: Request, _res: Response, next: NextFunction) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (error) {
    if (error instanceof ZodError) {
      const msg = error.errors.reduce((prev, err) => prev + `${err.message} ${err.path[1]} in ${err.path[0]}\n`, '');
      next(new APIError('VALIDATION_ERROR', HttpStatusCode.BAD_REQUEST, msg));
    }
    next(error);
  }
};
