import { type Model } from "mongoose";
import type IModel from "../../models/IModel";
import type IRepository from "../IRepository";

export class MongoRepository<M extends IModel> implements IRepository<M> {
  protected model: Model<M>;

  public constructor (model: Model<M>) {
    this.model = model;
  }

  public async insert (document: M): Promise<M> {
    return await this.model.create(document);
  }

  public async findOne (filter: object): Promise<M> {
    return await this.model.findOne(filter) as M;
  }

  public async findById (id: string): Promise<M> {
    return await this.model.findById(id) as M;
  }

  public async deleteOne (filter: object): Promise<M> {
    return await this.model.findOneAndDelete(filter) as M;
  }

  public async deleteById (id: string): Promise<M> {
    return await this.model.findByIdAndDelete(id) as M;
  }

  public async deleteMany (filter: object): Promise<number> {
    return (await this.model.deleteMany(filter)).deletedCount;
  }

  public async exists (filter: object): Promise<boolean> {
    return (await this.model.findOne(filter)) !== null;
  }
}

export default MongoRepository;
