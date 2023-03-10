import { Router, type Request, type Response } from "express";
import type IConfig from "../models/IConfig";
import MongoConfig from "../models/mongo/Config";
import MongoRepository from "../repositories/mongo/MongoRepository";
import ConfigController from "../controllers/ConfigController";

const router = Router();
const configController = new ConfigController<MongoRepository<IConfig>>(
  new MongoRepository<IConfig>(MongoConfig));

const postConfig = async (req: Request, res: Response): Promise<void> => {
  const name = req.body.name;
  const sourceText = req.body.sourceText;

  try {
    const config = await configController.addConfig(name, sourceText);
    res.status(200).json(config);
  } catch (err: unknown) {
    res.status(400).json({ error: (err as Error).message });
  }
};

/* eslint-disable @typescript-eslint/no-misused-promises */
router.post("/configs/:userId", postConfig);
/* eslint-enable @typescript-eslint/no-misused-promises */

export default router;
