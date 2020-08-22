import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';

import { ServerCoreMailerService } from '@srts.pw/server/core/mailer';

import { UserRepository } from '../../user.repository';
import { UserRegisterInput } from './user-register.input';
import { UserType } from '../../user.type';

@Injectable()
export class UserRegisterService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private mailerService: ServerCoreMailerService
  ) {}

  public async register(
    requestVariables: UserRegisterInput
  ): Promise<UserType> {
    const verificationToken = uuid();

    const userDocument = await this.userRepository.register(requestVariables, verificationToken);

    await this.mailerService.sendVerificationTokenEmail({
      email: userDocument.email,
      firstName: userDocument.firstName,
      lastName: userDocument.lastName,
      token: `https://srts.pw/verify-email/${verificationToken}`
    });

    return new UserType(userDocument);
  }
}
