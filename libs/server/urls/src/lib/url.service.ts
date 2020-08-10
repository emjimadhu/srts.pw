/* eslint-disable unicorn/no-fn-reference-in-iterator */
import {
  Injectable, NotFoundException, HttpService
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import{ v4 as uuid } from 'uuid';
import Metascraper from 'metascraper';
import MetascraperImage from 'metascraper-image';
import MetascraperDescription from 'metascraper-description';
import MetascraperTitle from 'metascraper-title';

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
    private readonly urlRepository: UrlRepository,
    private httpService: HttpService
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
    const metascraper = Metascraper([
      MetascraperImage(),
      MetascraperDescription(),
      MetascraperTitle()
    ]);

    let {
      slug, url, user
    } = requestVariables;

    if(!slug) {
      slug = uuid().slice(0, 8);
    }

    const htmlDocument = await this.httpService.get(url).toPromise();

    const metadata = await metascraper({
      html: htmlDocument.data,
      url: url
    });

    const urlEntity = this.urlRepository.create({
      id: uuid(),
      longUrl: url,
      shortUrl: `${environment.hostUrl}/${slug}`,
      slug,
      user,
      metadata
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
