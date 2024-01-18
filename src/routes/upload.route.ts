import express, { IRouter } from 'express';
import { multerMiddleware } from '../middlewares/multer';
import path from 'path';
import { uploadImageController } from '../controllers/upload.controller';

const uploadRoute: IRouter = express.Router();

const upload = multerMiddleware(path.join(__dirname, '../files'));

uploadRoute.post('/image', upload.fields([{ name: 'files', maxCount: 10 }]), uploadImageController);
// uploadRoute.post('/file');

export default uploadRoute;
