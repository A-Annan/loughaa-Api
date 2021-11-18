import { Model, Document } from 'mongoose';
import { DAO } from './DAO';

type typeDocument<T> = T & Document;

export abstract class BaseDao<T> implements DAO<T> {
  populateFields: Array<any>;
  constructor(private model: Model<typeDocument<T>>) {}
  async find(query: any = {}, options: any): Promise<any> {
    const a = await this.model
      .find({ query })
      .limit(options.limit)
      .skip(options.limit * options.page);
    return a;
  }

  async findOne(id: string | number, options?: any): Promise<T> {
    const populate: Array<string> = options?.populate
      ? options?.populate
      : null;
    //ressource serviceGroups
    return await this.model.findById(id).populate(populate);
  }

  async save(data: T): Promise<T> {
    const obj = new this.model(data);

    return this.model.create(obj);
  }

  async update(id: string | number, data: T): Promise<T> {
    return await this.model.findByIdAndUpdate(id, data);
  }

  async delete(id: any) {
    return this.model.deleteOne({ _id: id });
  }
}
