import {
  InputType, Field
} from '@nestjs/graphql';
import { IsUrl } from 'class-validator';

@InputType()
export class RedirectInput {
  @Field()
  public shortUrl: string;
}
