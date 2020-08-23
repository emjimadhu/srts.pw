import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';

import { environment } from '@srts.pw/server/environments';

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
        from: environment.mailer.from,
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
        from: environment.mailer.from,
        subject: 'Welcome to srts.pw',
        template: 'welcome',
        context: {
          fullName: `${firstName} ${lastName}`
        }
      });
  }
}
