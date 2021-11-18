export interface DAO<T> {
  find(query?: any, options?: any): Promise<any>;

  findOne(id: number | string, options?: any): Promise<T>;

  save(data: T): Promise<T>;

  update(id: number | string, data: T): Promise<T>;

  delete(id: number | string);
}
