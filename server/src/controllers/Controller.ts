import type IModel from "../models/IModel";
import type IRepository from "../repositories/IRepository";

class Controller<Repository extends IRepository<IModel>> {
  protected readonly repository: Repository;

  public constructor (repository: Repository) {
    this.repository = repository;
  }
}

export default Controller;
