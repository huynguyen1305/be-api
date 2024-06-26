import { convertToSlug } from './../utils/convertToSlug';
import express, { IRouter, Request } from 'express';
import { Post } from '../models/post.model';
import { Category } from '../models/category.model';
import { HttpStatusCode } from '../constants';
import createResponse from '../utils/createResponse';

const postRoute: IRouter = express.Router();

postRoute.post('/', async (req, res) => {
  const data = req.body;
  const isHasPost = await Post.findOne({ slug: data.slug });
  if (isHasPost) {
    return res.status(400).json({
      code: 400,
      message: 'Post already exists',
      data: isHasPost,
    });
  }
  const newPost = await Post.create({
    ...data,
    author: data.author._id,
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

  // console.log('categoryList', categoryList);

  const query: any = {
    category: {
      $in: categoryList,
    },
    isPublic: {
      $in: isPublic,
    },
    // exclude properties content
    $text: {
      $search: searchText,
      $caseSensitive: false,
      $diacriticSensitive: false,
    },
  };
  if (query && searchText === '') {
    delete query.$text;
  }

  const posts = await Post.find(query).populate('author').skip(skip).limit(limit).sort({ createdAt: -1 }).select('-content').exec();
  // console.log('posts', posts);

  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: posts,
  });
});

postRoute.get('/find-all', async (req: any, res) => {
  const users = await Post.find({}).populate('author').sort({ createdAt: -1 });
  res.status(HttpStatusCode.OK).json(
    createResponse({
      code: HttpStatusCode.OK,
      message: 'Get all post success',
      data: users,
    }),
  );
});

postRoute.get('/:slug', async (req, res) => {
  const slug = req.params.slug;
  const post = await Post.findOne({ slug }).populate('author');
  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: post,
  });
});

postRoute.patch('/:slug', async (req, res) => {
  const slug = req.params.slug;
  const data = req.body;
  const post = await Post.findOneAndUpdate({ slug }, data);
  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: post,
  });
});

postRoute.delete('/:slug', async (req, res) => {
  const slug = req.params.slug;
  const post = await Post.findOneAndDelete({ slug });
  return res.status(200).json({
    code: 200,
    message: 'OK',
    data: post,
  });
});

export default postRoute;
