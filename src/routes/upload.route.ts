import express, { IRouter } from 'express';
import { multerMiddleware } from '../middlewares/multer';
import path from 'path';
import { uploadFileController } from '../controllers/upload.controller';

const uploadRoute: IRouter = express.Router();

const upload = multerMiddleware(path.join(__dirname, '../files'));

uploadRoute.post('/files', upload.fields([{ name: 'file', maxCount: 10 }]), uploadFileController);

export default uploadRoute;
