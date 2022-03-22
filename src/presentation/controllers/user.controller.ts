import { Controller, Get, Injectable, Param } from '@nestjs/common';

import { UserUseCase } from '../../use-cases/user/user.useCase';

@Controller('users')
@Injectable()
export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  @Get('getRoles/:id')
  async getParameters(@Param() params: { id: number }): Promise<any> {
    const roles = await this.userUseCase.getUserRoles(params.id);
    return {
      status: 'Success',
      data: {
        roles,
      },
    };
  }
}
