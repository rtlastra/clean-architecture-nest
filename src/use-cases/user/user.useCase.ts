import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../../infrastructure/database/repositories/role.repository';
import { Role } from '../../infrastructure/database/models/role.model';
import { UserRepository } from '../../infrastructure/database/repositories/user.repository';

@Injectable()
export class UserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roleRepository: RoleRepository,
  ) {}

  async getUserRoles(userId: number): Promise<Role[]> {
    const user = await this.userRepository.findById(userId, {
      include: [Role],
    });
    const allRoles = await this.roleRepository.findAll();
    console.log(allRoles.length);
    return user?.roles;
  }
}
