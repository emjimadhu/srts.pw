import {
  Resolver, Mutation, Args, Query
} from '@nestjs/graphql';

import { UserType } from './user.type';
import { UserRegisterService } from './services/user-register/user-register.service';
import { UserRegisterInput } from './services';

@Resolver(of => UserType)
export class UserResolver {
  constructor(
    private readonly userRegisterService: UserRegisterService
  ) {}

  @Query(() => String)
  public users(): string {
    return 'Users';
  }

  @Mutation(() => UserType)
  public register(
    @Args('requestVariables') requestVariables: UserRegisterInput
  ): Promise<UserType> {
    return this.userRegisterService.register(requestVariables);
  }
}
