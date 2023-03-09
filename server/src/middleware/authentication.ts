import { type Request, type Response, type NextFunction } from "express";

export const authenticateUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  next();
};
