import type IModel from "../models/IModel";

type Result<T> = T | Promise<T>;

interface IRepository<M extends IModel> {
  insert (document: M): Result<M>
  findOne (filter: object): Result<M>
  findById (id: string): Result<M>
  deleteOne (filter: object): Result<M>
  deleteMany (filter: object): Result<number>
  deleteById (id: string): Result<M>
  exists (filter: object): Result<boolean>
}

export default IRepository;
