import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserRepository } from '../../user.repository';
import { UserRegisterInput } from './user-register.input';
import { UserType } from '../../user.type';

@Injectable()
export class UserRegisterService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository
  ) {}

  public async register(
    requestVariables: UserRegisterInput
  ): Promise<UserType> {
    return new UserType(await this.userRepository.register(requestVariables));
  }
}
