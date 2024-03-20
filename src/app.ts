import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { CORS, HttpStatusCode, NOT_FOUND_ROUTE } from './constants';
import { Environment } from './constants/environment';
import errorLogger from './middlewares/errorLogger';
import errorResponse from './middlewares/errorResponse';
import loggerAPI from './middlewares/loggerAPI';
import route from './routes';
import { APIError } from './utils/BaseError';
import createResponse from './utils/createResponse';
import path from 'path';

const passport = require('passport');
const app: Application = express();
const session = require('express-session');

const allowedOrigins = process.env.CORS_PAGES?.split(',') || ['*'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (process.env.NODE_ENV !== Environment.PRODUCTION) return callback(null, true);
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new APIError(CORS, HttpStatusCode.BAD_REQUEST, msg), false);
      }
      return callback(null, true);
    },
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  }),
);
app.use(express.json());
app.use(session({ secret: 'ongbatoi.vn', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(loggerAPI);

app.disable('x-powered-by');

app.use('/files', express.static(path.join(__dirname, '/files')));

app.use('/health', (_req, res) => {
  res.status(200).json({ message: 'Health check OK' });
});
app.use('/api', route);

app.use(errorLogger);
app.use(errorResponse);

// app.use('/', (_req, res) => {
//   res.status(200).json({ message: 'Welcome to backend-api' });
// });
app.all('*', (_req: Request, res: Response) => {
  res.status(HttpStatusCode.NOT_FOUND).json(createResponse({ code: HttpStatusCode.NOT_FOUND, message: NOT_FOUND_ROUTE }));
});

export default app;
