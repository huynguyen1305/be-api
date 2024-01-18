import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';
import { logger } from './configs/winston';

dotenv.config();

const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ?? 3000;
const CONNECT_STRING = process.env.CONNECT_STRING ?? 'mongodb://localhost:27017/backend';

mongoose
  .connect(CONNECT_STRING)
  .then(() => {
    logger.debug(`[ ready ] Database is connected`);
    app.listen(PORT, () => {
      logger.debug(`[ ready ] App listening at ${HOST}:${PORT}`);
    });
  })
  .catch(_err => {
    logger.error('Database cannot connect');
  });
