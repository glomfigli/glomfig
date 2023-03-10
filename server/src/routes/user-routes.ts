import { Router, type Request, type Response } from "express";
import type IUser from "../models/IUser";
import MongoUser from "../models/mongo/User";
import MongoRepository from "../repositories/mongo/MongoRepository";
import UserController from "../controllers/UserController";

const router = Router();
const userController = new UserController<MongoRepository<IUser>>(
  new MongoRepository<IUser>(MongoUser)
);

const getUser = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;

  try {
    const user = await userController.fetchUser(userId);
    res.status(200).json(user);
  } catch (err: unknown) {
    res.status(400).json({ error: (err as Error).message });
  }
};

const postUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    const user = await userController.register(username, password);
    res.status(200).json(user);
  } catch (err: unknown) {
    res.status(400).json({ error: (err as Error).message });
  }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.userId;

  try {
    const user = await userController.delete(userId);
    res.status(200).json(user);
  } catch (err: unknown) {
    res.status(400).json({ error: (err as Error).message });
  }
};

/* eslint-disable @typescript-eslint/no-misused-promises */
router.post("/users", postUser);
router.get("/users/:userId", getUser);
router.delete("/users/:userId", deleteUser);
/* eslint-enable @typescript-eslint/no-misused-promises */

export default router;
