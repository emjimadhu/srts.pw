import {
  Module, HttpModule
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UrlRepository } from './url.repository';
import { UrlResolver } from './url.resolver';
import { UrlService } from './url.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UrlRepository]),
    HttpModule
  ],
  providers: [
    UrlResolver,
    UrlService
  ]
})
export class ServerUrlsModule {}
