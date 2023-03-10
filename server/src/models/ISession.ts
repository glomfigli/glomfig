import IModel from "./IModel";
import IUser from "./IUser";

interface ISession extends IModel {
  createdAt?: Date
  maxAge: number
  authenticationToken: string
  user: IUser
}

export default ISession;