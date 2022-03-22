import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';

import { BaseRepository } from './base.repository';
@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }
}
