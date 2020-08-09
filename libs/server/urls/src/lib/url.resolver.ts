import {
  Resolver, Mutation, Args, Query
} from '@nestjs/graphql';

import { UrlService } from './url.service';
import { UrlType } from './url.gql.type';
import { CreateShortUrlInput } from './models';
import { RedirectInput } from './models/redirect.input';


@Resolver(of => UrlType)
export class UrlResolver {
  constructor(
    private readonly urlService: UrlService
  ) {}

  @Query(() => [UrlType])
  public urls(): Promise<UrlType[]> {
    return this.urlService.listRead();
  }

  @Mutation(() => UrlType)
  public createShortUrl(
    @Args('requestVariables') requestVariables: CreateShortUrlInput
  ): Promise<UrlType> {
    return this.urlService.createShortUrl(requestVariables);
  }

  @Query(() => UrlType)
  public async getUrlByShortUrl(
    @Args('requestVariables') requestVariables: RedirectInput
  ): Promise<UrlType> {
    return this.urlService.getUrlByShortUrl(requestVariables);
  }
}
