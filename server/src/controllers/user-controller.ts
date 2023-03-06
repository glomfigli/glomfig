import { type HydratedDocument } from "mongoose";
import { User, type IUser } from "../models/User";

const MINIMUM_USERNAME_LENGTH = 3;
const MAXIMUM_USERNAME_LENGTH = 20;
const MINIMUM_PASSWORD_LENGTH = 8;

type UserDocument = HydratedDocument<IUser>;

async function register (username: string, password: string):
Promise<UserDocument> {
  if (username.length < MINIMUM_USERNAME_LENGTH ||
      username.length > MAXIMUM_USERNAME_LENGTH) {
    throw new Error(`Username must contain ${
      MINIMUM_USERNAME_LENGTH}-${MAXIMUM_USERNAME_LENGTH} characters`);
  }

  if (password.length < MINIMUM_PASSWORD_LENGTH) {
    throw new Error(`Password must be at least ${
      MINIMUM_PASSWORD_LENGTH} characters long`);
  }

  return await new User({ username, password }).save(); // TODO: hash
}

async function findOne (username: string): Promise<UserDocument | null> {
  const foundUser = await User.findOne({ username });
  return foundUser;
}

export default {
  register, findOne
};
