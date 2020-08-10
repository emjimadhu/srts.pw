import {
  ObjectType, Field
} from '@nestjs/graphql';

@ObjectType()
export class UrlMetadataType {
  @Field({
    nullable: true
  })
  public description: string;

  @Field({
    nullable: true
  })
  public image: string;

  @Field({
    nullable: true
  })
  public title: string;
}
