import { Module } from '@nestjs/common';
import { ServerCoreGraphqlModule } from '@srts.pw/server/core/graphql';

import { ServerCoreTypeormModule } from '@srts.pw/server/core/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    ServerCoreGraphqlModule,
    ServerCoreTypeormModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
