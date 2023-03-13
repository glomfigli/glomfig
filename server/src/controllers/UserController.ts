import bcrypt from "bcrypt";
import type IRepository from "../repositories/IRepository";
import type IUser from "../models/IUser";
import Controller from "./Controller";

const ROUNDS = 10;
const USERNAME_MINIMUM_LENGTH = 3;
const USERNAME_MAXIMUM_LENGTH = 20;
const PASSWORD_MINIMUM_LENGTH = 8;

function validateUsername (username: string): void {
  if (username.length < USERNAME_MINIMUM_LENGTH ||
      username.length > USERNAME_MAXIMUM_LENGTH) {
    throw new Error(`Username must contain ${
      USERNAME_MINIMUM_LENGTH}-${USERNAME_MAXIMUM_LENGTH} characters`);
  }
}

function validatePassword (username: string): void {
  if (username.length < PASSWORD_MINIMUM_LENGTH) {
    throw new Error(`Password must be at least ${
      PASSWORD_MINIMUM_LENGTH} characters long`);
  }
}

class UserController<R extends IRepository<IUser>> extends Controller<R> {
  public async register (username: string, password: string): Promise<IUser> {
    validateUsername(username);
    validatePassword(password);

    if (await this.repository.exists({ username })) {
      throw new Error("Username is already taken");
    }

    const passwordHash = await bcrypt.hash(password, ROUNDS);

    return await this.repository.insert({
      username,
      passwordHash,
      configs: []
    });
  }

  public async validateCredentials (
    user: IUser,
    password: string
  ): Promise<void> {
    if (!(await bcrypt.compare(password, user.passwordHash))) {
      throw new Error("Invalid credetials");
    }
  }

  public async fetchUser (userId: string): Promise<IUser> {
    return await this.repository.findById(userId);
  }

  public async fetchUserByName (username: string): Promise<IUser> {
    return await this.repository.findOne({ username });
  }

  public async delete (userId: string): Promise<IUser> {
    return await this.repository.deleteById(userId);
  }
}

export default UserController;
