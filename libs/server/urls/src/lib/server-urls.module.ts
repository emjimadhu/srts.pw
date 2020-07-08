import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UrlsRepository } from './urls.repository';
import { UrlsResolver } from './urls.resolver';
import { UrlsService } from './services/urls-list-query';

@Module({
  imports: [TypeOrmModule.forFeature([UrlsRepository])],
  providers: [
    UrlsResolver,
    UrlsService
  ]
})
export class ServerUrlsModule {}
