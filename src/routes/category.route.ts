import express, { IRouter } from 'express';
import { Category } from '../models/category.model';

const categoryRoute: IRouter = express.Router();

categoryRoute.post('/', async (req, res) => {
  console.log(req.body);
  const data = req.body;
  const newCategory = await Category.create(data);

  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: newCategory,
  });
});

categoryRoute.get('/', async (req, res) => {
  const categories = await Category.find({});

  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: categories,
  });
});
// // employeeRoute.post('/file');

export default categoryRoute;
