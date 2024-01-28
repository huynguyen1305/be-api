import express, { IRouter } from 'express';

const userRoute: IRouter = express.Router();

// userRoute.post('/image', employeController);
userRoute.get('/');

export default userRoute;
