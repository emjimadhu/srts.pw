import {
  Resolver, Mutation, Args, Query
} from '@nestjs/graphql';

import { UserType } from './user.type';
import { UserRegisterService } from './services/user-register/user-register.service';
import {
  UserRegisterInput, UserVerifyEmailInput, UserVerifyEmailService
} from './services';

@Resolver(of => UserType)
export class UserResolver {
  constructor(
    private readonly userRegisterService: UserRegisterService,
    private readonly userVerifyEmailService: UserVerifyEmailService
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

  @Mutation(() => Boolean)
  public verifyEmail(
    @Args('requestVariables') requestVariables: UserVerifyEmailInput
  ): Promise<boolean> {
    return this.userVerifyEmailService.verifyEmail(requestVariables);
  }
}
