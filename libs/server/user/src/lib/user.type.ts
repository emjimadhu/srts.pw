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

  @Field(type => Date)
  public createdAt: Date;

  @Field(type => Date)
  public updatedAt: Date;

  constructor(userDocument: User) {
    super();
    this.id = userDocument.id;
    this.firstName = userDocument.firstName;
    this.lastName = userDocument.lastName;
    this.email = userDocument.email;
    this.createdAt = userDocument.createdAt;
    this.updatedAt = userDocument.updatedAt;
  }
}
