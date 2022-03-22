import { Injectable } from '@nestjs/common';
import { Role } from '../models/role.model';

import { BaseRepository } from './base.repository';
@Injectable()
export class RoleRepository extends BaseRepository<Role> {
  constructor() {
    super(Role);
  }
}
