import express, { IRouter } from 'express';
import categoryRoute from './category.route';
import healthRoute from './health';
import postRoute from './post.route';
import uploadRoute from './upload.route';
import userRoute from './user.route';

// import exampleRoute from './example.route';

const route: IRouter = express.Router();

route.use('/health', healthRoute);
route.use('/upload', uploadRoute);
route.use('/user', userRoute);
route.use('/category', categoryRoute);
route.use('/post', postRoute);

export default route;
