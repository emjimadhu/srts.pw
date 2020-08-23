import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';

import { ISendVerficationToken } from './types/verification-token.interface';
import { ISendWelcomeEmail } from './types/welcome.interface';

@Injectable()
export class ServerCoreMailerService {
  constructor(
    private mailerService: MailerService
  ) {}

  public sendVerificationTokenEmail(requestVariables: ISendVerficationToken): Promise<SentMessageInfo> {
    const {
      email, token, firstName, lastName
    } = requestVariables;

    return this.mailerService
      .sendMail({
        to: email,
        from: 'user@outlook.com',
        subject: 'Verify srts.pw Account',
        template: 'verification-email',
        context: {
          verificationToken: token,
          fullName: `${firstName} ${lastName}`
        }
      });
  }

  public sendWelcomeEmail(requestVariables: ISendWelcomeEmail): Promise<SentMessageInfo> {
    const {
      firstName, lastName, email
    } = requestVariables;

    return this.mailerService
      .sendMail({
        to: email,
        from: 'user@outlook.com',
        subject: 'Welcome to srts.pw',
        template: 'welcome',
        context: {
          fullName: `${firstName} ${lastName}`
        }
      });
  }
}
