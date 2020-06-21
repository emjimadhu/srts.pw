import {
  ObjectType, Field, ID
} from '@nestjs/graphql';

@ObjectType()
export abstract class BaseGQLType {
  @Field(type => ID)
  public id: string;

  @Field()
  public createdAt: Date;

  @Field()
  public updatedAt: Date;
}
