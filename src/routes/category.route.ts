import express, { IRouter } from 'express';
import { Category } from '../models/category.model';

const categoryRoute: IRouter = express.Router();

categoryRoute.post('/', async (req, res) => {
  console.log(req.body);
  const data = req.body;
  const category = await Category.findOne({ slug: data.slug });
  if (category) {
    return res.status(400).json({
      code: 400,
      message: 'Category already exists',
      data: category,
    });
  }
  const newCategory = await Category.create(data);

  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: newCategory,
  });
});

categoryRoute.get('/', async (req, res) => {
  const categories = await Category.find({}).sort({ slug: 1 });

  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: categories,
  });
});

categoryRoute.get('/:slug', async (req, res) => {
  const slug = req.params.slug;
  const categories = await Category.findOne({ slug });

  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: categories,
  });
});

categoryRoute.patch('/:slug', async (req, res) => {
  const slug = req.params.slug;
  const updatedCategory = req.body;
  const categories = await Category.updateOne({ slug }, updatedCategory);

  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: categories,
  });
});

categoryRoute.delete('/:slug', async (req, res) => {
  const slug = req.params.slug;
  console.log('delete slug, ', req.params);
  const categories = await Category.deleteOne({ slug });

  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: categories,
  });
});

export default categoryRoute;
