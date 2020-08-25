import {
  ObjectType, Field, ID
} from '@nestjs/graphql';

import { BaseGQLType } from '@srts.pw/server/common/typeorm';

import { User } from './user.entity';

@ObjectType('User')
export class UserType extends BaseGQLType {
  @Field(type => ID)
  public id: string;

  @Field()
  public firstName: string;

  @Field()
  public lastName: string;

  @Field()
  public email: string;

  @Field()
  public isVerified: boolean;

  @Field()
  public token: string;

  @Field(type => Date)
  public createdAt: Date;

  @Field(type => Date)
  public updatedAt: Date;

  constructor(userDocument: User, token?: string) {
    super();
    this.id = userDocument.id;
    this.firstName = userDocument.profile.firstName;
    this.lastName = userDocument.profile.lastName;
    this.email = userDocument.email;
    this.createdAt = userDocument.createdAt;
    this.updatedAt = userDocument.updatedAt;
    this.isVerified = userDocument.isVerified;
    this.token = token;
  }
}
