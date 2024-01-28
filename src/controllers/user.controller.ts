// import * as bcrypt from 'bcryptjs';
import console from 'console';
import type { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '../constants/httpStatusCode';

import type { JwtPayload } from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';

// import { LogService } from '../services/logs.service';
// import { userService } from '../services/users.service';
import createResponse from '../utils/createResponse';
import { userService } from '../services/user.service';

export const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers = await userService.getAll();

    res.status(HttpStatusCode.OK).json(
      createResponse({
        code: HttpStatusCode.OK,
        message: 'Get all users success',
        data: allUsers,
      }),
    );
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(
      createResponse({
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: 'Get all users failed',
        data: error,
      }),
    );
    next(error);
  }
};

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);
    res.status(HttpStatusCode.OK).json(
      createResponse({
        code: HttpStatusCode.OK,
        message: 'Get user success',
        data: user,
      }),
    );
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(
      createResponse({
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: 'Get user failed',
        data: error,
      }),
    );
    next(error);
  }
};

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    const userExist = await userService.getByEmail(body.email);
    if (userExist) {
      throw new Error('email already exist');
    }
    const newUser = {
      ...body,
      // hashPassword: bcrypt.hashSync(body.hashPassword, 8),
    };
    const user = await userService.createUser(newUser);
    res.status(HttpStatusCode.OK).json(
      createResponse({
        code: HttpStatusCode.OK,
        message: 'Create user success',
        data: user,
      }),
    );
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(
      createResponse({
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: 'Create user failed',
        data: error,
      }),
    );
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,

  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const user = await userService.updateUser(id, body);
    res.status(HttpStatusCode.OK).json(
      createResponse({
        code: HttpStatusCode.OK,
        message: 'Update user success',
        data: user,
      }),
    );
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(
      createResponse({
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: 'Update user failed',
        data: error,
      }),
    );
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    res.status(HttpStatusCode.OK).json(
      createResponse({
        code: HttpStatusCode.OK,
        message: 'Delete user success',
        data: user,
      }),
    );
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(
      createResponse({
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: 'Delete user failed',
        data: error,
      }),
    );
    next(error);
  }
};

export const seedUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    // console.log(body);
    const userExist = await userService.getByEmail(body.email);
    if (userExist) {
      throw new Error('email already exist');
    }
    const newUser = {
      ...body,
      // hashPassword: bcrypt.hashSync(body.hashPassword, 8),
    };
    const user = await userService.createUser(newUser);
    res.status(HttpStatusCode.OK).json(
      createResponse({
        code: HttpStatusCode.OK,
        message: 'Create user success',
        data: user,
      }),
    );
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(
      createResponse({
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: 'Create user failed',
        data: error,
      }),
    );
    next(error);
  }
};
export const getUserLogSession = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // console.log(req.headers.authorization);
    if (!req.headers.authorization) {
      res.status(HttpStatusCode.UNAUTHORIZED).json(
        createResponse({
          code: HttpStatusCode.OK,
          message: 'No Token, authorization denied!',
        }),
      );
    }
    const { id } = jwtDecode<{ id: string; email: string }>(req.headers.authorization || '');
    console.log(id);

    // const logs = await LogService.getById(id);
    // res.status(HttpStatusCode.OK).json(
    //   createResponse({
    //     code: HttpStatusCode.OK,
    //     message: 'Get log Success',
    //     data: logs,
    //   }),
    // );
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(
      createResponse({
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: 'Create user failed',
        data: error,
      }),
    );
    next(error);
  }
};
export default {
  getAll,
  getOne,
  createUser,
  updateUser,
  deleteUser,
  seedUser,
  getUserLogSession,
};
