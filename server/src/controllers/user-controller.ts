import { type HydratedDocument } from "mongoose";
import { User, type IUser } from "../models/User";
import bcrypt from "bcrypt";

const MINIMUM_USERNAME_LENGTH = 3;
const MAXIMUM_USERNAME_LENGTH = 20;
const MINIMUM_PASSWORD_LENGTH = 8;

const ROUNDS = 10;

type UserDocument = HydratedDocument<IUser>;

async function register (username: string, password: string):
Promise<UserDocument> {
  if (username === undefined) {
    throw new Error("Username is required!");
  } else if (username.length < MINIMUM_USERNAME_LENGTH ||
      username.length > MAXIMUM_USERNAME_LENGTH) {
    throw new Error(`Username must contain ${
      MINIMUM_USERNAME_LENGTH}-${MAXIMUM_USERNAME_LENGTH} characters`);
  }

  if (password === undefined) {
    throw new Error("Password is required!");
  } else if (password.length < MINIMUM_PASSWORD_LENGTH) {
    throw new Error(`Password must be at least ${
      MINIMUM_PASSWORD_LENGTH} characters long`);
  }

  const userExists: boolean = await User.findOne({ username }) !== null;
  if (userExists) {
    throw new Error("Username must be unique!");
  }

  const passwordHash = await bcrypt.hash(password, ROUNDS);

  return await new User({ username, passwordHash }).save();
}

async function findOne (username: string): Promise<UserDocument | null> {
  const foundUser = await User.findOne({ username });
  return foundUser;
}

export default {
  register, findOne
};
