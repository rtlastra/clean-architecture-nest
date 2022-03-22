import { Module } from '@nestjs/common';
import { UserController } from '../../presentation/controllers/user.controller';
import { UseCasesModule } from './use-cases.module';

@Module({
  imports: [UseCasesModule],
  controllers: [UserController],
})
export class PresentationModule {}
