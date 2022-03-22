import {
  Table,
  Column,
  Model,
  AllowNull,
  BelongsToMany,
} from 'sequelize-typescript';

import { User } from './user.model';

@Table({ underscored: true, tableName: 'roles' })
export class Role extends Model<Role> {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  displayName: string;

  @AllowNull(true)
  @Column
  canLogin: boolean;

  @BelongsToMany(() => User, {
    through: 'roles_users',
    otherKey: 'user_id',
    timestamps: false,
    foreignKey: 'role_id',
  })
  users: User[];
}
