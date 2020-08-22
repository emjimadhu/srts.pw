import {
  InputType, Field
} from '@nestjs/graphql';
import {
  MinLength, IsUUID, IsOptional
} from 'class-validator';

import { UserBaseInput } from '../../common';

@InputType()
export class UserRegisterInput extends UserBaseInput {
  @Field()
  public firstName: string;

  @Field()
  public lastName: string;

  @IsUUID('4')
  @IsOptional()
  @Field({
    nullable: true
  })
  public id?: string;
}
