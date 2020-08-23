import {
  InputType, Field
} from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class UserVerifyEmailInput {
  @IsUUID('4', {
    message: 'Invalid Token Format'
  })
  @Field()
  public verificationToken: string;
}
