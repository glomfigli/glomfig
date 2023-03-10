import type IRepository from "../repositories/IRepository";
import type IConfig from "../models/IConfig";
import Controller from "./Controller";

class ConfigController<Repository extends IRepository<IConfig>> extends Controller<Repository> {
  public async addConfig (
    name: string,
    sourceText: string
  ): Promise<IConfig> {
    return await this.repository.insert({ name, sourceText });
  }
}

export default ConfigController;
