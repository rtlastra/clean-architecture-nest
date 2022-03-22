import { Model, ModelCtor } from 'sequelize-typescript';
import { FindOptions } from 'sequelize/types';

export abstract class BaseRepository<T extends Model> {
  private model: ModelCtor<T>;

  constructor(model: ModelCtor<T>) {
    this.model = model;
  }

  async findById(id: number, findOptions: FindOptions = {}): Promise<T> {
    return this.model.findByPk(id, findOptions);
  }

  async findAll(findOptions: FindOptions = {}): Promise<T[]> {
    return this.model.findAll(findOptions);
  }
}
