import { Request, Response, NextFunction } from 'express';

const addAuthorInfo = (_req: Request, res: Response, next: NextFunction) => {
  res.locals.author = {
    name: 'Claudio',
    lastname: 'Campuzano',
  };
  next();
};

export { addAuthorInfo }