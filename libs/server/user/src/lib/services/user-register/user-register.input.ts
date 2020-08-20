import {
  InputType, Field
} from '@nestjs/graphql';
import { MinLength } from 'class-validator';

import { UserBaseInput } from '../../common';

@InputType()
export class UserRegisterInput extends UserBaseInput {
  @MinLength(4)
  @Field()
  public firstName: string;

  @MinLength(4)
  @Field()
  public lastName: string;
}
