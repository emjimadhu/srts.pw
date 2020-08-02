import {
  ObjectType, Field, ID
} from '@nestjs/graphql';

import { BaseGQLType } from '@srts.pw/server/common/typeorm';

@ObjectType('Urls')
export class UrlsType extends BaseGQLType {
  @Field(type => ID)
  public id: string;

  @Field()
  public shortUrl: string;

  @Field()
  public createdAt: Date;

  @Field()
  public updatedAt: Date;
}
