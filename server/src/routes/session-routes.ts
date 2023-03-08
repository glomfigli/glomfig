import { Router, type Request, type Response } from "express";
import SessionController from "../controllers/session-controller";

const router = Router();

const postSession = (req: Request, res: Response): void => {
  const { userId, password } = req.body;

  SessionController.createSession(userId, password)
    .then((session) => res.status(201).json(session))
    .catch((err) => res.status(400).json({ error: err.message }));
};

const getSession = (req: Request, res: Response): void => {

};

const deleteSession = (req: Request, res: Response): void => {

};

router.post("/sessions", postSession);
router.get("/sessions/:sessionId", getSession);
router.delete("/sessions/:sessionId", deleteSession);

export default router;
