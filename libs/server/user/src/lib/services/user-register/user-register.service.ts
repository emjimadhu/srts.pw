import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';

import {
  UserRoles, generateSalt, hashPassword
} from '@srts.pw/server/common/types';
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
    const {
      firstName, lastName, email, password
    } = requestVariables;
    const salt = await generateSalt();
    const verificationToken = uuid();

    const userDocument = await this.userRepository.userRegister({
      profile: {
        firstName,
        lastName
      },
      userName: email,
      email,
      password: await hashPassword(password, salt),
      isVerified: false,
      services: {
        verificationToken: {
          token: verificationToken,
          generatedAt: new Date()
        }
      },
      id: uuid(),
      role: UserRoles.USER
    });

    await this.mailerService.sendVerificationTokenEmail({
      email: userDocument.email,
      firstName: userDocument.profile.firstName,
      lastName: userDocument.profile.lastName,
      token: `https://srts.pw/verify-email/${verificationToken}`
    });

    return new UserType(userDocument);
  }
}
