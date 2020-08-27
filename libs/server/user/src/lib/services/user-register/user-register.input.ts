import {
  Field, InputType
} from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

import { UserBaseInput } from '../../common';


@InputType()
export class UserRegisterInput extends UserBaseInput {
  @Field()
  public firstName: string;

  @Field()
  public lastName: string;

  @IsUUID('4')
  @Field()
  public id?: string;
}
