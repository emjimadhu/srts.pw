import {
  InputType, Field
} from '@nestjs/graphql';
import {
  IsUrl, Matches, IsOptional
} from 'class-validator';


@InputType()
export class CreateShortUrlInput {
  @Field({
    nullable: true
  })
  @Matches(/[\w-]+/g, {
    message: 'Invalid slug format. Should be Alphanumeric and Dash'
  })
  @IsOptional()
  public slug: string;

  @Field()
  @IsUrl({}, {
    message: 'Invalid URL format'
  })
  public url: string;
}
