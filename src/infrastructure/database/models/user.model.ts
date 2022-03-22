import {
  Table,
  Column,
  Model,
  AllowNull,
  BelongsToMany,
} from 'sequelize-typescript';
import { Role } from './role.model';

@Table({ underscored: true, tableName: 'users' })
export class User extends Model<User> {
  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  mobile: string;

  @AllowNull(true)
  @Column
  typeOfIdentification: string;

  @AllowNull(true)
  @Column
  identification: number;

  @AllowNull(true)
  @Column
  gender: string;

  @AllowNull(true)
  @Column
  numOfChildren: number;

  @AllowNull(true)
  @Column
  maritalStatus: string;

  @AllowNull(true)
  @Column
  dateOfBirth: string;

  @AllowNull(false)
  @Column
  encryptedPassword: string;

  @AllowNull(false)
  @Column
  passwordUpdateAt: Date;

  @AllowNull(true)
  @Column
  signInCount: number;

  @AllowNull(true)
  @Column
  currentSignInAt: Date;

  @AllowNull(true)
  @Column
  lastSignInAt: Date;

  @AllowNull(true)
  @Column
  currentSignInIp: string;

  @AllowNull(true)
  @Column
  lastSignInIp: string;

  @AllowNull(false)
  @Column
  username: string;

  @AllowNull(false)
  @Column
  emailConfirmedAt: Date;

  @AllowNull(false)
  @Column
  mobileConfirmedAt: Date;

  @AllowNull(false)
  @Column
  loginAttempts: number;

  @AllowNull(false)
  @Column
  generic: boolean;

  @AllowNull(false)
  @Column
  sendNotifications: boolean;

  @AllowNull(false)
  @Column
  hasBiometricReader: boolean;

  @AllowNull(true)
  @Column
  personalDataHandling: boolean;

  @AllowNull(true)
  @Column
  address: string;

  @AllowNull(true)
  @Column
  supplierId: number;

  @AllowNull(true)
  @Column
  lastPasswordChangeNotification: Date;

  @BelongsToMany(() => Role, {
    through: 'roles_users',
    otherKey: 'role_id',
    timestamps: false,
    foreignKey: 'user_id',
  })
  roles: Role[];
}
