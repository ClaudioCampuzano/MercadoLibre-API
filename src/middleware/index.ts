import { Request, Response, NextFunction } from 'express';
import { AUTHOR_NAME, AUTHOR_LASTNAME } from '../config';

const addAuthorInfo = (_req: Request, res: Response, next: NextFunction) => {
  res.locals.author = {
    name: AUTHOR_NAME,
    lastname: AUTHOR_LASTNAME,
  };

  next();
};

export { addAuthorInfo };
