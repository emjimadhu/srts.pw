import {
  Resolver, Mutation, ArgsType, Args, Query
} from '@nestjs/graphql';

import { UrlService } from './url.service';
import { UrlType } from './url.gql.type';


@Resolver(of => UrlType)
export class UrlResolver {
  constructor(
    private readonly urlService: UrlService
  ) {}

  @Query(() => [UrlType])
  public urls(): Promise<UrlType[]> {
    return this.urlService.listRead();
  }
}
