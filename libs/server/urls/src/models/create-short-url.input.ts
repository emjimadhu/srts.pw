import {
  InputType, Field
} from '@nestjs/graphql';
import {
  IsUrl, Matches
} from 'class-validator';


@InputType()
export class CreateShortUrlInput {
  @Field()
  @Matches(/[\da-z-]/i, {
    message: 'Invalid slug format. Should be Alphanumeric and Dash'
  })
  public slug: string;

  @Field()
  @IsUrl({}, {
    message: 'Invalid URL format'
  })
  public url: string;
}
