import {
  InputType, Field
} from '@nestjs/graphql';
import {
  IsEmail, MinLength
} from 'class-validator';

@InputType()
export class UserBaseInput {
  @IsEmail()
  @Field()
  public email: string;

  @MinLength(4)
  @Field()
  public password: string;
}
