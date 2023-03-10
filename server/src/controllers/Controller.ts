import type IModel from "../models/IModel";
import type IRepository from "../repositories/IRepository";

class Controller<R extends IRepository<IModel>> {
  protected readonly repository: R;

  public constructor (repository: R) {
    this.repository = repository;
  }
}

export default Controller;
