import { Router, type Request, type Response } from "express";
import type ISession from "../models/ISession";
import type IUser from "../models/IUser";
import MongoSession from "../models/mongo/Session";
import MongoUser from "../models/mongo/User";
import MongoRepository from "../repositories/mongo/MongoRepository";
import SessionController from "../controllers/SessionController";
import UserController from "../controllers/UserController";
import { authenticateUser } from "../middleware/authentication";

const router = Router();
const sessionController = new SessionController<MongoRepository<ISession>>(
  new MongoRepository<ISession>(MongoSession));
const userController = new UserController<MongoRepository<IUser>>(
  new MongoRepository<IUser>(MongoUser));

const postSession = async (req: Request, res: Response): Promise<void> => {
  const { userId, password } = req.body;

  const user = await userController.fetchUser(userId);
  try {
    await userController.validateCredentials(userId, password);
    const session = await sessionController.createSession(user);
    res.cookie("authentication-token", session.authenticationToken)
      .status(201).json(session);
  } catch (err: unknown) {
    res.status(400).json({ error: (err as Error).message });
  }
};

const invalidateSessions = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.body;

  try {
    const deletedCount = await sessionController.invalidateAll(userId)
    res.status(200).json({ status: "ok", numInvalidated: deletedCount });
  } catch (err: unknown) {
    res.status(400).json({ error: (err as Error).message });
  }
};

router.use("/sessions/invalidate", authenticateUser);

/* eslint-disable @typescript-eslint/no-misused-promises */
router.post("/sessions", postSession);
router.post("/sessions/invalidate", invalidateSessions);
/* eslint-enable @typescript-eslint/no-misused-promises */

export default router;
