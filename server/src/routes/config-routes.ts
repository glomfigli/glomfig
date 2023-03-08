import { Router, type Request, type Response } from "express";
import ConfigController from "../controllers/config-controller";

const router = Router();

const postConfig = (req: Request, res: Response): void => {

  const name = req.body.name;
  const sourceText = req.body.sourceText;
  const userId = req.params.userId;

  ConfigController.addConfig(name, sourceText, userId)
    .then((userId) => res.status(200).json({}))
    .catch((err) => res.status(400).json({ error: err.message }));
};


router.post("/configs/:userId", postConfig);


export default router;
