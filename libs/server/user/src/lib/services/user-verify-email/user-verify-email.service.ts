import {
  Injectable, NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  scheduled, asapScheduler, Observable
} from 'rxjs';
import {
  tap, mergeMap, map
} from 'rxjs/operators';

import { ServerCoreMailerService } from '@srts.pw/server/core/mailer';

import { UserRepository } from '../../user.repository';
import { UserVerifyEmailInput } from './user-verify-email.input';
import { User } from '../../user.entity';

@Injectable()
export class UserVerifyEmailService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private mailerService: ServerCoreMailerService
  ) {}

  public async verifyEmail(
    requestVariables: UserVerifyEmailInput
  ): Promise<Observable<boolean>> {

    const {
      verificationToken
    } = requestVariables;

    return scheduled(
      this.userRepository.userReadByVerificationToken(verificationToken),
      asapScheduler
    ).pipe(
      tap(async(userDocument: User) => {
        await this.mailerService.sendWelcomeEmail({
          email: userDocument.email,
          firstName: userDocument.profile.firstName,
          lastName: userDocument.profile.lastName
        });
      }),
      mergeMap((userDocument: User) => scheduled(
        this.userRepository.userVerificationTokenUpdate(userDocument),
        asapScheduler
      ).pipe(
        map((user: User) => !!user)
      ))
    );

    // const userDocument = await this.userRepository.userReadByVerificationToken(verificationToken);

    // if (!userDocument) {
    //   throw new NotFoundException('Verification Token is invalid');
    // } else {
    //   const updatedDocument = await this.userRepository.userVerificationTokenUpdate(userDocument);

    //   await this.mailerService.sendWelcomeEmail({
    //     email: updatedDocument.email,
    //     firstName: updatedDocument.profile.firstName,
    //     lastName: updatedDocument.profile.lastName
    //   });

    //   return !!updatedDocument;
    // }
  }
}
