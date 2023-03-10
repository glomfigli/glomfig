import type IModel from "./IModel";
import type IConfig from "./IConfig";

interface IUser extends IModel {
  username: string
  passwordHash: string
  configs: IConfig[]
}

export default IUser;