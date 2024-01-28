import express, { IRouter } from 'express';
import healthRoute from './health';

// import exampleRoute from './example.route';

import uploadRoute from './upload.route';
import userRoute from './user.route';

const route: IRouter = express.Router();

route.use('/health', healthRoute);
route.use('/upload', uploadRoute);
route.use('/user', userRoute);

export default route;
