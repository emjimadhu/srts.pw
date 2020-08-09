import {
  Injectable, NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import{ v4 as uuid } from 'uuid';

import { environment } from '@srts.pw/server/environments';

import { UrlRepository } from './url.repository';
import { Url } from './url.entity';
import { UrlType } from './url.gql.type';
import {
  CreateShortUrlInput, GetUrlsInput
} from './models';
import { GetURLByShortURLAndUserInput } from './models/get-url-by-short-url-and-user.input';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(UrlRepository)
    private readonly urlRepository: UrlRepository
  ) {}

  public async listRead(requestVariables: GetUrlsInput): Promise<UrlType[]> {
    const {
      user
    } = requestVariables || {};
    let filter: {user?: string} = {};
    if (user) {
      filter = {
        user
      };
    }
    return (await this.urlRepository.find(filter)).map((urlDocument: Url) => new UrlType(urlDocument));
  }

  public async createShortUrl(requestVariables: CreateShortUrlInput): Promise<UrlType> {
    let {
      slug, url, user
    } = requestVariables;

    if(!slug) {
      slug = uuid().slice(0, 8);
    }

    const urlEntity = this.urlRepository.create({
      id: uuid(),
      longUrl: url,
      shortUrl: `${environment.hostUrl}/${slug}`,
      slug,
      user
    });

    const urlDocument = await this.urlRepository.save(urlEntity);

    return new UrlType(urlDocument);
  }

  public async getUrlByShortUrl(requestVariables: GetURLByShortURLAndUserInput): Promise<UrlType> {
    const {
      shortUrl,
      user
    } = requestVariables;

    const urlDocument = await this.urlRepository.findOne({
      shortUrl,
      user
    });

    if (!urlDocument) {
      throw new NotFoundException('URL or User doesn\'t exsists!');
    }

    return new UrlType(urlDocument);
  }
}
