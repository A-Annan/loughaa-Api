import { DAO } from './DAO';

export interface IBaseService<T> {
  find(query?: any, options?: any): Promise<any>;

  findOne(id: number | string, options?: any): Promise<T>;

  create(data: T, accessTokenJWT?: string): Promise<T>;

  update(id: number | string, data: T): Promise<T>;

  delete(id: number | string, accessTokenJWT?: string);
}

export abstract class BaseService<T> implements IBaseService<T> {
  constructor(private readonly dao: DAO<T>) {}

  async find(query: any, options: any): Promise<any> {
    return await this.dao.find(query, options);
  }

  async findOne(id: string, options?: any): Promise<T> {
    return await this.dao.findOne(id, options);
  }

  async create(dto: T): Promise<T> {
    return await this.dao.save({ ...dto });
  }

  async update(id: string, dto: T): Promise<T> {
    console.log(dto);
    return await this.dao.update(id, dto);
  }

  async delete(id: string) {
    return await this.dao.delete(id);
  }
}
