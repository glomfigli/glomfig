import { type HydratedDocument } from "mongoose";
import { Session, type ISession } from "../models/Session";
import UserController from "../controllers/user-controller";

type SessionDocument = HydratedDocument<ISession>;

async function createSession (userId: string, password: string):
Promise<SessionDocument> {
  const userExists = await UserController.findOne(userId);
  if (userExists == null) {
    throw new Error("Trying to create session for nonexistent user");
  }

  await UserController.login(userId, password);

  const session = await new Session({ maxAge: 3600, user: userId }).save();
  if (session === null) {
    throw new Error("Session creation failed");
  }

  return session;
}

export default {
  createSession
};
