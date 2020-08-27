import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  asyncScheduler, Observable, scheduled
} from 'rxjs';
import {
  map, tap
} from 'rxjs/operators';
import { v4 as uuid } from 'uuid';

import {
  generateSalt, hashPassword, UserRoles
} from '@srts.pw/server/common/types';
import { ServerCoreMailerService } from '@srts.pw/server/core/mailer';
import { environment } from '@srts.pw/server/environments';

import { User } from '../../user.entity';
import { UserRepository } from '../../user.repository';
import { UserType } from '../../user.type';
import { UserRegisterInput } from './user-register.input';


@Injectable()
export class UserRegisterService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private mailerService: ServerCoreMailerService
  ) {}

  public async register(
    requestVariables: UserRegisterInput
  ): Promise<Observable<UserType>> {
    const {
      firstName, lastName, email, password, id
    } = requestVariables;
    const verificationToken = uuid();
    const salt = await generateSalt();
    const hashedPassord = await hashPassword(password, salt);

    return scheduled(
      this.userRepository.userRegister({
        profile: {
          firstName,
          lastName
        },
        userName: email,
        email,
        isVerified: false,
        services: {
          password: {
            password: hashedPassord,
            salt,
            generatedAt: new Date(),
            updatedAt: new Date()
          },
          verificationToken: {
            token: verificationToken,
            generatedAt: new Date()
          }
        },
        id,
        role: UserRoles.USER
      }),
      asyncScheduler
    ).pipe(
      tap(async(userDocument: User) => {
        await this.mailerService.sendVerificationTokenEmail({
          email: userDocument.email,
          firstName: userDocument.profile.firstName,
          lastName: userDocument.profile.lastName,
          token: `${environment.clientUrl}/verify-email/${verificationToken}`
        });
      }),
      map((userDocument: User) => new UserType(userDocument))
    );
  }
}
