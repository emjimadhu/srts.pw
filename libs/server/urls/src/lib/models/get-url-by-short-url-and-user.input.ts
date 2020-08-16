import {
  InputType, Field
} from '@nestjs/graphql';
import {
  IsUUID, IsString, MinLength
} from 'class-validator';

@InputType()
export class GetURLByShortURLAndUserInput {
  @Field()
  @IsString()
  @MinLength(6)
  public shortUrl: string;
}
