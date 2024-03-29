import { HttpStatusCode } from './../constants/httpStatusCode';
import express, { IRouter } from 'express';
import passport from 'passport';
import { Users } from '../models/user.model';
import createResponse from '../utils/createResponse';
import { jwtDecode } from 'jwt-decode';

const jwt = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;

const userRoute: IRouter = express.Router();
const secretkey = process.env.SECRET_KEY || 'ongbatoi.vn';

passport.use(new LocalStrategy(Users.authenticate()));
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

// userRoute.post('/image', employeController);
userRoute.get('/', async (req: any, res) => {
  const users = await Users.find();
  res.status(HttpStatusCode.OK).json(
    createResponse({
      code: HttpStatusCode.OK,
      message: 'Get user success',
      data: users,
    }),
  );
});

userRoute.get('/find-by-id/:id', async (req: any, res) => {
  const { id } = req.params;
  const user = await Users.findOne({ _id: id });
  res.status(HttpStatusCode.OK).json(
    createResponse({
      code: HttpStatusCode.OK,
      message: 'Get user success',
      data: user,
    }),
  );
});

// userRoute.get('/:username', async (req: any, res) => {
//   const username = req.params.username;
//   const user = await Users.findOne({ username: username });
//   res.status(HttpStatusCode.OK).json(
//     createResponse({
//       code: HttpStatusCode.OK,
//       message: 'Get user success',
//       data: user,
//     }),
//   );
// });

userRoute.get('/me', async (req: any, res) => {
  // console.log('====', { req: req, user: req.user });
  const { userId, username } = jwtDecode<{ userId: string; username: string }>(req.headers.authorization || '', {});
  const user = await Users.findOne({ _id: userId });
  console.log('====', userId, username, user);
  res.status(HttpStatusCode.OK).json(
    createResponse({
      code: HttpStatusCode.OK,
      message: 'Get user success',
      data: user,
    }),
  );
});

userRoute.patch('/:username', async (req: any, res) => {
  const user = await Users.findOneAndUpdate({ username: req.body.username }, { $set: req.body });
  res.status(HttpStatusCode.OK).json(
    createResponse({
      code: HttpStatusCode.OK,
      message: 'Update user success',
      data: user,
    }),
  );
});

userRoute.delete('/:username', async (req: any, res) => {
  const user = await Users.findOneAndDelete({ username: req.body.username });
  res.status(HttpStatusCode.OK).json(
    createResponse({
      code: HttpStatusCode.OK,
      message: 'Delete user success',
      data: user,
    }),
  );
});

userRoute.post('/register', async (req: any, res) => {
  Users.register(new Users({ username: req.body.username, displayName: req.body.displayName }), req.body.password, function (err, user) {
    if (err) {
      // res.json({ success: false, message: 'Your account could not be saved. Error: ' + err });
      res.status(HttpStatusCode.UNAUTHORIZED).json(
        createResponse({
          code: HttpStatusCode.UNAUTHORIZED,
          message: 'Create user failed',
          data: err,
        }),
      );
    } else {
      req?.login(user, function (er: any) {
        if (er) {
          res.status(HttpStatusCode.UNAUTHORIZED).json(
            createResponse({
              code: HttpStatusCode.UNAUTHORIZED,
              message: 'Create user failed',
              data: er,
            }),
          );
        } else {
          res.status(HttpStatusCode.OK).json(
            createResponse({
              code: HttpStatusCode.OK,
              message: 'Your account has been saved',
              data: user,
            }),
          );
        }
      });
    }
  });
});

userRoute.post('/login', function (req, res) {
  if (!req.body.username) {
    res.json({ success: false, message: 'Username was not given' });
  } else if (!req.body.password) {
    res.json({ success: false, message: 'Password was not given' });
  } else {
    passport.authenticate('local', function (err: any, user: { _id: any; username: any }, _info: any) {
      // console.log('info', err, user, info);
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({ success: false, message: 'username or password incorrect' });
        } else {
          const token = jwt.sign({ userId: user._id, username: user.username }, secretkey, { expiresIn: '24h' });
          // console.log('token', token);
          res.status(HttpStatusCode.OK).json(
            createResponse({
              code: HttpStatusCode.OK,
              message: 'Authentication successful',
              data: token,
            }),
          );
          // res.json({ success: true, message: 'Authentication successful', token: token });
        }
      }
    })(req, res);
  }
});

export default userRoute;
