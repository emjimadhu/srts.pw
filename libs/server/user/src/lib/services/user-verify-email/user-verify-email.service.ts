import {
  Injectable, NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ServerCoreMailerService } from '@srts.pw/server/core/mailer';

import { UserRepository } from '../../user.repository';
import { UserVerifyEmailInput } from './user-verify-email.input';

@Injectable()
export class UserVerifyEmailService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private mailerService: ServerCoreMailerService
  ) {}

  public async verifyEmail(
    requestVariables: UserVerifyEmailInput
  ): Promise<boolean> {
    const {
      verificationToken
    } = requestVariables;

    const userDocument = await this.userRepository.userReadByVerificationToken(verificationToken);

    if (!userDocument) {
      throw new NotFoundException('Verification Token is invalid');
    } else {
      const updatedDocument = await this.userRepository.userVerificationTokenUpdate(userDocument);

      await this.mailerService.sendWelcomeEmail({
        email: updatedDocument.email,
        firstName: updatedDocument.profile.firstName,
        lastName: updatedDocument.profile.lastName
      });

      return !!updatedDocument;
    }
  }
}
