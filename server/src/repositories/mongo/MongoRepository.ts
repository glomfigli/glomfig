import { type Model } from "mongoose";
import type IModel from "../../models/IModel";
import type IRepository from "../IRepository";

export class MongoRepository<T extends IModel> implements IRepository<T> {
  protected model: Model<T>;

  public constructor (model: Model<T>) {
    this.model = model;
  }

  public async insert (document: T): Promise<T> {
    return await this.model.create(document) as T;
  }

  public async findOne (filter: object): Promise<T> {
    return await this.model.findOne(filter) as T;
  }

  public async findById (id: string): Promise<T> {
    return await this.model.findById(id) as T;
  }

  public async deleteOne (filter: object): Promise<T> {
    return await this.model.findOneAndDelete(filter) as T;
  }

  public async deleteById (id: string): Promise<T> {
    return await this.model.findByIdAndDelete(id) as T;
  }

  public async deleteMany (filter: object): Promise<number> {
    return (await this.model.deleteMany(filter)).deletedCount;
  }

  public async exists (filter: object): Promise<boolean> {
    const result = await this.model.find(filter);
    return result !== null;
  }
}

export default MongoRepository;
