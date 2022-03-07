import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import AppError from '@/main/errors/AppError';

export const errorHandler = (err: Error, req: Request, res: Response, _: NextFunction) => {
  if (Joi.isError(err)) {
    let { message } = err.details.values().next().value;
    message = message.replace('"', '').replace('"', '');

    return res.status(400).json({
      status: 'error',
      message: message || 'no message',
    });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};
