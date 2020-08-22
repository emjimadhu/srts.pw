import {
  Module, Global
} from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { environment } from '@srts.pw/server/environments';

import { ServerCoreMailerService } from './server-core-mailer.service';

@Global()
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: environment.mailer.host,
        port: environment.mailer.port,
        secure: false, // true for 465, false for other ports
        auth: {
          user: environment.mailer.username,
          pass: environment.mailer.password
        }
      },
      defaults: {
        from: '"srts.pw" <user@outlook.com>'
      },
      template: {
        dir: __dirname + '/mail-templates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      }
    })
  ],
  providers: [ServerCoreMailerService],
  exports: [ServerCoreMailerService]
})
export class ServerCoreMailerModule {}
