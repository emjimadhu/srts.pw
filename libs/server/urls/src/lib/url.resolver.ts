import {
  Resolver, Mutation, ArgsType, Args, Query
} from '@nestjs/graphql';

import { UrlService } from './url.service';
import { UrlType } from './url.gql.type';
import { CreateShortUrlInput } from './models';


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
}
