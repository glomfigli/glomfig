import type IModel from "../models/IModel";

interface IRepository<T extends IModel> {
  insert (document: T): T | Promise<T>
  findOne (filter: object): T | Promise<T>
  findById (id: string): T | Promise<T>
  deleteOne (filter: object): T | Promise<T>
  deleteMany (filter: object): number | Promise<number>
  deleteById (id: string): T | Promise<T>
  exists (filter: object): boolean | Promise<boolean>
}

export default IRepository;
