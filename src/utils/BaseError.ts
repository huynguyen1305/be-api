import { HttpStatusCode } from '../constants/httpStatusCode';

class BaseError extends Error {
  public readonly name: string;
  public readonly httpCode: number;

  constructor(name: string, httpCode: number, description: string) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;

    Error.captureStackTrace(this);
  }
}

// free to extend the BaseError
class APIError extends BaseError {
  constructor(name: string, httpCode = HttpStatusCode.INTERNAL_SERVER, description = 'internal server error') {
    super(name, httpCode, description);
  }
}

export { BaseError, APIError };
