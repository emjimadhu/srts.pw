import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UrlRepository } from './url.repository';
import { Url } from './url.entity';
import { UrlType } from './url.gql.type';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(UrlRepository)
    private readonly urlRepository: UrlRepository
  ) {}

  public async listRead(): Promise<UrlType[]> {
    return (await this.urlRepository.find()).map((urlDocument: Url) => new UrlType(urlDocument));
  }
}
