import { type HydratedDocument } from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import { Session, type ISession } from "../models/Session";
import UserController from "../controllers/user-controller";
import { SESSION_SECRET } from "../config";

type SessionDocument = HydratedDocument<ISession>;
interface DeleteResult {
  ok?: number
  deletedCount: number
  n?: number
};

async function createSession (userId: string, password: string):
Promise<SessionDocument> {
  const userExists = await UserController.findOne(userId);
  if (userExists == null) {
    throw new Error("Trying to create session for nonexistent user");
  }

  const existingSession = await Session.findOne({ user: userId });
  if (existingSession !== null) {
    return existingSession;
  }

  await UserController.login(userId, password);

  const authenticationToken = jsonwebtoken.sign({ userId }, SESSION_SECRET);
  const session = await new Session({
    maxAge: 3600,
    user: userId,
    authenticationToken
  }).save();

  if (session === null) {
    throw new Error("Session creation failed");
  }

  return session;
}

async function invalidateSessions (userId: string): Promise<DeleteResult> {
  return await Session.deleteMany({ user: userId });
}

export default {
  createSession,
  invalidateSessions
};
