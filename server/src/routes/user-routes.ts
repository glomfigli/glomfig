import { Router, type Request, type Response } from "express";
import UserController from "../controllers/user-controller";

const router = Router();

const getUser = (req: Request, res: Response): void => {
  UserController.findOne(req.params.userId)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ error: err.message }));
};

const postUser = (req: Request, res: Response): void => {
  const { username, password } = req.body;

  UserController.register(username, password)
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(500).json({ error: err.message }));
};

const postConfig = (req: Request, res: Response): void => {
  const { name, config } = req.body;
  const username = req.params.userId;

  UserController.addConfig(username, name, config)
    .then((createdConfig) => res.status(201).json(createdConfig))
    .catch((err) => res.status(500).json({ error: err.message }));
};

router.get("/users/:userId", getUser);
router.post("/users", postUser);
router.post("/users/:userID/configs", postConfig);

export default router;
