import winston from 'winston';

const customLevels = {
  levels: {
    trace: 5,
    debug: 4,
    info: 3,
    warn: 2,
    error: 1,
    fatal: 0,
  },
  colors: {
    trace: 'white',
    debug: 'green',
    info: 'green',
    warn: 'yellow',
    error: 'red',
    fatal: 'red',
  },
};
const isDevEnvironment = () => {
  return process.env.NODE_ENV !== 'production';
};
const formatter = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.splat(),
  winston.format.printf(info => {
    const { timestamp, level, message, ...meta } = info;
    return `${timestamp} [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''}`;
  }),
);

const formatterToFile = winston.format.combine(
  winston.format.splat(),
  winston.format.printf(info => {
    const { message } = info;
    return message;
  }),
);

class Logger {
  private _logger: winston.Logger;

  constructor() {
    const today = new Date();
    const date = ('0' + today.getDate()).slice(-2);
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const year = today.getFullYear();

    const prodTransport = [
      new winston.transports.File({
        filename: `logs/error/error-${year}-${month}-${date}.log`,
        level: 'error',
        format: formatterToFile,
      }),

      new winston.transports.File({
        filename: `logs/application/application-${year}-${month}-${date}.log`,
        level: 'info',
        format: formatterToFile,
      }),
    ];

    const transport = new winston.transports.Console({
      format: formatter,
    });
    this._logger = winston.createLogger({
      level: isDevEnvironment() ? 'trace' : 'error',
      levels: customLevels.levels,
      transports: [transport, ...prodTransport],
    });
    winston.addColors(customLevels.colors);
  }

  trace(msg: string, meta?: unknown) {
    this._logger.log('trace', msg, meta);
  }

  debug(msg: string, meta?: unknown) {
    this._logger.debug(msg, meta);
  }

  info(msg: string, meta?: unknown) {
    this._logger.info(msg, meta);
  }

  warn(msg: string, meta?: unknown) {
    this._logger.warn(msg, meta);
  }

  error(msg: string, meta?: unknown) {
    this._logger.error(msg, meta);
  }

  fatal(msg: string, meta?: unknown) {
    this._logger.log('fatal', msg, meta);
  }
}

export const logger = new Logger();
