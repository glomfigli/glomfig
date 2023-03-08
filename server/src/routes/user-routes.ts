import { Router, type Request, type Response } from "express";
import UserController from "../controllers/user-controller";

const router = Router();

const getUser = (req: Request, res: Response): void => {
  UserController.findOne(req.params.userId)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json({ error: err.message }));
};

const postUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  UserController.register(username, password)
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(400).json({ error: err.message }));
};

const deleteUser = (req: Request, res: Response): void => {
  const userId = req.params.userId;

  UserController.deleteOne(userId)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json({ error: err.message }));
};

router.post("/users", postUser);
router.get("/users/:userId", getUser);
router.delete("/users/:userId", deleteUser);

export default router;
