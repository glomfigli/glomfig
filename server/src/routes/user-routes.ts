import express from "express";
import UserController from "../controllers/user-controller";

const router = express.Router();

router.get("/users/:uid", async (req: express.Request,
  res: express.Response) => {
  const foundUser = await UserController.findOne(req.params.uid);
  return res.json(foundUser);
});

router.post("/users", async (req: express.Request,
  res: express.Response) => {
  const { username, password } = req.body;

  const createdUser = await UserController.register(username, password);

  return res.json(createdUser);
});

export default router;
