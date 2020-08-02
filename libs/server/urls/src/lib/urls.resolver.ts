import {
  Resolver, Mutation, ArgsType, Args, Query
} from '@nestjs/graphql';

import { UrlsService } from './services/urls-list-query/url-list-query.service';
import { UrlsType } from './urls.gql.type';
import { Urls } from './urls.entity';


@Resolver(of => UrlsType)
export class UrlsResolver {
  constructor(
    private readonly urlsService: UrlsService
  ) {}

  @Query(() => [UrlsType])
  public urls(): Promise<Urls[]> {
    return this.urlsService.listRead();
  }
}
