import { Module } from '@nestjs/common';
import { UserUseCase } from '../../use-cases/user/user.useCase';
import { RolesModule } from './roles.module';
import { UsersModule } from './users.module';

@Module({
  imports: [UsersModule, RolesModule],
  providers: [UserUseCase],
  exports: [UserUseCase],
})
export class UseCasesModule {}
