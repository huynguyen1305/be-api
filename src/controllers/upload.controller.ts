import { NextFunction, Response } from 'express';
import { HttpStatusCode, SUCCESS } from '../constants';
import createResponse from '../utils/createResponse';
import { filesToURL } from '../utils/image';

export const uploadImageController = (req: any, res: Response, next: NextFunction) => {
  try {
    const files = req.files.files;
    const data = filesToURL(files);

    return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
  } catch (err) {
    next(err);
  }
};
