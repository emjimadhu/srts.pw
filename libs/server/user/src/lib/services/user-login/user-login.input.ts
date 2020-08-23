import { InputType } from '@nestjs/graphql';

import { UserBaseInput } from '../../common';

@InputType()
export class UserLoginInput extends UserBaseInput {}
