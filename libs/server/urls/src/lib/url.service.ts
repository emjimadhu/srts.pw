import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import{ v4 as uuid } from 'uuid';

import { environment } from '@srts.pw/server/environments';

import { UrlRepository } from './url.repository';
import { Url } from './url.entity';
import { UrlType } from './url.gql.type';
import { CreateShortUrlInput } from './models';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(UrlRepository)
    private readonly urlRepository: UrlRepository
  ) {}

  public async listRead(): Promise<UrlType[]> {
    return (await this.urlRepository.find()).map((urlDocument: Url) => new UrlType(urlDocument));
  }

  public async createShortUrl(requestVariables: CreateShortUrlInput): Promise<UrlType> {
    let {
      slug, url
    } = requestVariables;

    if(!slug) {
      slug = uuid().slice(0, 8);
    }

    const urlEntity = this.urlRepository.create({
      id: uuid(),
      longUrl: url,
      shortUrl: `${environment.hostUrl}/${slug}`,
      slug
    });

    const urlDocument = await this.urlRepository.save(urlEntity);

    return new UrlType(urlDocument);
  }
}
