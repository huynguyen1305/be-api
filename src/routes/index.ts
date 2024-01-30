import express, { IRouter } from 'express';
import categoryRoute from './category.route';
import healthRoute from './health';

// import exampleRoute from './example.route';

import uploadRoute from './upload.route';
import userRoute from './user.route';

const route: IRouter = express.Router();

route.use('/health', healthRoute);
route.use('/upload', uploadRoute);
route.use('/user', userRoute);
route.use('/category', categoryRoute);

export default route;
