import {
  ObjectType, Field, ID
} from '@nestjs/graphql';

import { BaseGQLType } from '@srts.pw/server/common/typeorm';

import { Url } from './url.entity';

@ObjectType('Url')
export class UrlType extends BaseGQLType {
  @Field(type => ID)
  public id: string;

  @Field()
  public shortUrl: string;

  @Field()
  public createdAt: Date;

  @Field()
  public updatedAt: Date;

  constructor(urlDocument: Url) {
    super();
    this.id = urlDocument.id;
    this.shortUrl = urlDocument.shortUrl;
    this.createdAt = urlDocument.createdAt;
    this.updatedAt = urlDocument.updatedAt;
  }
}
