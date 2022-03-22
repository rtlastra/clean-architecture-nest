import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../database/models/user.model';
import { UserRepository } from '../database/repositories/user.repository';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class UsersModule {}
