import { Module } from '@nestjs/common';

import { ServerCoreTypeormModule } from '@srts.pw/server/core/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [ServerCoreTypeormModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
