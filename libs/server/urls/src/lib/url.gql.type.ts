import {
  ObjectType, Field, ID
} from '@nestjs/graphql';

import { BaseGQLType } from '@srts.pw/server/common/typeorm';

import { Url } from './url.entity';
import { UrlMetadataType } from './url-metadata.gql.type';

@ObjectType('Url')
export class UrlType extends BaseGQLType {
  @Field(type => ID)
  public id: string;

  @Field()
  public shortUrl: string;

  @Field()
  public longUrl: string;

  @Field()
  public user: string;

  @Field()
  public createdAt: Date;

  @Field()
  public updatedAt: Date;

  @Field(type => UrlMetadataType)
  public metadata: UrlMetadataType;

  constructor(urlDocument: Url) {
    super();
    this.id = urlDocument.id;
    this.shortUrl = urlDocument.shortUrl;
    this.longUrl = urlDocument.longUrl;
    this.createdAt = urlDocument.createdAt;
    this.updatedAt = urlDocument.updatedAt;
    this.user = urlDocument.user;
    this.metadata = urlDocument.metadata;
  }
}
