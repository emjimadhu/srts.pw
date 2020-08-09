import {
  Resolver, Mutation, Args, Query
} from '@nestjs/graphql';

import { UrlService } from './url.service';
import { UrlType } from './url.gql.type';
import {
  CreateShortUrlInput, GetUrlsInput
} from './models';
import { GetURLByShortURLAndUserInput } from './models/get-url-by-short-url-and-user.input';


@Resolver(of => UrlType)
export class UrlResolver {
  constructor(
    private readonly urlService: UrlService
  ) {}

  @Query(() => [UrlType])
  public urls(
    @Args('requestVariables', {
      nullable: true
    }) requestVariables: GetUrlsInput
  ): Promise<UrlType[]> {
    return this.urlService.listRead(requestVariables);
  }

  @Mutation(() => UrlType)
  public createShortUrl(
    @Args('requestVariables') requestVariables: CreateShortUrlInput
  ): Promise<UrlType> {
    return this.urlService.createShortUrl(requestVariables);
  }

  @Query(() => UrlType)
  public async getUrlByShortUrl(
    @Args('requestVariables') requestVariables: GetURLByShortURLAndUserInput
  ): Promise<UrlType> {
    return this.urlService.getUrlByShortUrl(requestVariables);
  }
}
