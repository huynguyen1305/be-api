import { Request } from 'express';
import { existsSync, mkdirSync } from 'fs';
import multer, { FileFilterCallback } from 'multer';
import { HttpStatusCode } from '../constants';
import { APIError } from '../utils/BaseError';

export const multerMiddleware = (dest: string) => {
  const multerStorage = multer.diskStorage({
    destination: function (_req, _file: Express.Multer.File, cb) {
      if (!existsSync(dest)) {
        mkdirSync(dest);
      }
      cb(null, dest);
    },
    filename: function (_req, file: Express.Multer.File, cb) {
      const uniqueSuffix = Date.now().toString() + Math.round(Math.random() * 1e9);

      cb(null, uniqueSuffix + '-' + file.originalname);
    },
  });

  const fileFilter = function (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) {
    const fileAccept = ['png', 'jpeg', 'jpg', 'webp'];
    const fileTypeAccept = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const getExtension = file.originalname.split('.').pop() || '';
    const checkFileType = fileTypeAccept.includes(file.mimetype);
    const checkFile = fileAccept.includes(getExtension);
    if (!checkFile || !checkFileType) cb(new APIError('Type error', HttpStatusCode.BAD_REQUEST, 'File type not excepted'));
    else cb(null, true);
  };

  return multer({ storage: multerStorage, dest, fileFilter });
};
