import { NextFunction, Response } from 'express';
import { HttpStatusCode, SUCCESS } from '../constants';
import createResponse from '../utils/createResponse';
import { filesToURL } from '../utils/image';
import { Files } from '../models/files.model';

export const uploadFileController = async (req: any, res: Response, next: NextFunction) => {
  try {
    const files = req.files.file;
    const data = filesToURL(files);
    // add to new Files model
    const isHasFile = await Files.findOne({ url: data[0].url });
    if (isHasFile) {
      return res.status(400).json({
        code: 400,
        message: 'File already exists',
        data: isHasFile,
      });
    }
    await Files.create({
      ...data[0],
    });
    // const res = await Files.create({ files: filesToURL(files) });
    // console.log('=====================', typeof req.files, JSON.stringify(data));
    return res.status(HttpStatusCode.OK).json(createResponse({ code: HttpStatusCode.OK, data, message: SUCCESS }));
  } catch (err) {
    next(err);
  }
};
