import {
  Resolver, Mutation, Args, Query
} from '@nestjs/graphql';
import { Response } from 'express';


import { UrlService } from './url.service';
import { UrlType } from './url.gql.type';
import { CreateShortUrlInput } from './models';
import { RedirectInput } from './models/redirect.input';
import { ResponseGql } from './gql.decorator';


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
  public async redirect(
    @Args('requestVariables') requestVariables: RedirectInput,
    @ResponseGql() response: Response
  ): Promise<UrlType> {
    const urlDocument = await this.urlService.redirect(requestVariables);
    response.status(301);
    response.set('Location', urlDocument.longUrl);
    return new UrlType(urlDocument);
  }
}
