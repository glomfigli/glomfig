import type IRepository from "../repositories/IRepository";
import type IConfig from "../models/IConfig";
import Controller from "./Controller";

class ConfigController<R extends IRepository<IConfig>> extends Controller<R> {
  public async addConfig (
    name: string,
    sourceText: string
  ): Promise<IConfig> {
    return await this.repository.insert({ name, sourceText });
  }
}

export default ConfigController;
