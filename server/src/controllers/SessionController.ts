import jsonwebtoken from "jsonwebtoken";
import type IRepository from "../repositories/IRepository";
import type ISession from "../models/ISession";
import Controller from "./Controller";
import type IUser from "../models/IUser";
import { SESSION_SECRET } from "../config";

class SessionController<R extends IRepository<ISession>> extends Controller<R> {
  public async createSession (targetUser: IUser): Promise<ISession> {
    const existingSession = await this.repository.findOne({
      userId: targetUser.id
    });

    if (existingSession !== null) {
      return existingSession;
    } else {
      const authenticationToken = jsonwebtoken.sign(
        { userId: targetUser.id },
        SESSION_SECRET
      );

      return await this.repository.insert({
        maxAge: 3600,
        user: targetUser,
        authenticationToken
      });
    }
  }

  public async invalidateAll (targetUser: IUser): Promise<number> {
    return await this.repository.deleteMany({ user: targetUser.id });
  }
}

export default SessionController;
