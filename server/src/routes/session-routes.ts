import { Router, type Request, type Response } from "express";
import SessionController from "../controllers/session-controller";

const router = Router();

const postSession = (req: Request, res: Response): void => {
  const { userId, password } = req.body;

  SessionController.createSession(userId, password)
    .then((session) => res.status(201).json(session))
    .catch((err) => res.status(400).json({ error: err.message }));
};

const invalidateSessions = (req: Request, res: Response): void => {
  const { userId } = req.body;

  SessionController.invalidateSessions(userId)
    .then((result) => res.status(200).json({
      status: "ok",
      numInvalidated: result.deletedCount
    }))
    .catch((err) => res.status(400).json({ error: err.message }));
};

router.post("/sessions", postSession);
router.post("/sessions/invalidate", invalidateSessions);

export default router;
