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
      cb(null, uniqueSuffix + '+-_-+' + file.originalname);
    },
  });

  return multer({ storage: multerStorage, dest });
};
