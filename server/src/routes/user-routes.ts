import express from "express";
import UserController from "../controllers/user-controller";

const router = express.Router();

router.get("/users/:uid", async (req: express.Request,
  res: express.Response) => {
  return res.json({});
});

router.post("/users", async (req: express.Request,
  res: express.Response) => {
  const { username, password } = req.body;

  UserController.register(username, password);

  return res.json({ created: username });
});

export default router;
