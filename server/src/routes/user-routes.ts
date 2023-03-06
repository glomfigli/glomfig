import { Router, type Request, type Response } from "express";
import UserController from "../controllers/user-controller";

const router = Router();

async function getUser (req: Request, res: Response): Promise<Response> {
  const foundUser = await UserController.findOne(req.params.uid);
  return res.json(foundUser);
}

async function postUser (req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  try {
    const createdUser = await UserController.register(username, password);
    return res.json(createdUser);
  } catch (err) {
    return res.status(400).json({ error: String(err) });
  }
}

router.get("/users/:uid", (req: Request, res: Response) => {
  void getUser(req, res);
});

router.post("/users", (req: Request, res: Response) => {
  void postUser(req, res);
});

export default router;
