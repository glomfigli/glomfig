import { type HydratedDocument } from "mongoose";
import { Config, type IConfig } from "../models/Config";
import userController from "./user-controller";

type ConfigDocument = HydratedDocument<IConfig>;


async function addConfig (name: string, sourceText: string, userId: string): Promise<ConfigDocument | null> {

  const foundUser = await userController.findOne(userId);
  if (foundUser === null) {
    throw new Error("User not found");
  }
  let addedConfig = await new Config({ name, sourceText}).save();
  const updatedUser = foundUser.configs.push(addedConfig._id);
  await foundUser.save();
  if (addedConfig === null) {
    throw new Error("Failed to update config");
  }

  return addedConfig;
}

export default {
  addConfig,
};
