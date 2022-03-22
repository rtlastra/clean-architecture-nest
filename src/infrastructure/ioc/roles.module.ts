import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from '../database/models/role.model';
import { RoleRepository } from '../database/repositories/role.repository';

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  controllers: [],
  providers: [RoleRepository],
  exports: [RoleRepository],
})
export class RolesModule {}
