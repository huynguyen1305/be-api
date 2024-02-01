import { convertToSlug } from './../utils/convertToSlug';
import express, { IRouter, Request } from 'express';
import { Post } from '../models/post.model';
import { Category } from '../models/category.model';

const postRoute: IRouter = express.Router();

postRoute.post('/', async (req, res) => {
  const data = req.body;
  const newPost = await Post.create({
    ...data,
    valueSearch: convertToSlug(data.title, ' '),
  });

  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: newPost,
  });
});

postRoute.get('/', async (req: Request, res) => {
  const page = (req.query?.page || 0) as number;
  const limit = (req.query?.limit || 5) as number;
  const searchText = (req.query?.search || '') as string;
  const skip = page * limit;

  const category = await Category.find({}).select('slug');
  const categoryFull = category.map(item => item.slug);
  const categoryList = req.query?.category || categoryFull;
  const isPublic = req.query?.isPublic || [true, false];

  const query: any = {
    category: {
      $in: categoryList,
    },
    isPublic: {
      $in: isPublic,
    },
    $text: {
      $search: searchText,
      $caseSensitive: false,
      $diacriticSensitive: false,
    },
  };
  if (query && searchText === '') {
    delete query.$text;
  }

  const posts = await Post.find(query).skip(skip).limit(limit).sort({ createdAt: -1 }).exec();

  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: posts,
  });
});
// // employeeRoute.post('/file');

export default postRoute;
