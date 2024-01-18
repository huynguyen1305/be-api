import express, { IRouter } from 'express';
import healthRoute from './health';

// import exampleRoute from './example.route';

import uploadRoute from './upload.route';

const route: IRouter = express.Router();

route.use('/health', healthRoute);
// route.use('/example', exampleRoute);
route.use('/upload', uploadRoute);

export default route;
