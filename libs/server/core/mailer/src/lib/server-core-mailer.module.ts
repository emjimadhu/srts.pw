import {
  Module, Global
} from '@nestjs/common';

import { ServerCoreMailerService } from './server-core-mailer.service';

@Global()
@Module({
  controllers: [],
  providers: [ServerCoreMailerService],
  exports: [ServerCoreMailerService]
})
export class ServerCoreMailerModule {}
