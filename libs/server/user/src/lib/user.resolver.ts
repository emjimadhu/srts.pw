import {
  Args, Mutation, Query, Resolver
} from '@nestjs/graphql';
import { Observable } from 'rxjs';

import {
  UserRegisterInput, UserVerifyEmailInput, UserVerifyEmailService
} from './services';
import { UserLoginInput } from './services/user-login';
import { UserLoginService } from './services/user-login/user-login.service';
import { UserRegisterService } from './services/user-register/user-register.service';
import { UserType } from './user.type';


@Resolver(of => UserType)
export class UserResolver {
  constructor(
    private readonly userRegisterService: UserRegisterService,
    private readonly userLoginService: UserLoginService,
    private readonly userVerifyEmailService: UserVerifyEmailService
  ) {}

  @Query(() => String)
  public users(): string {
    return 'Users';
  }

  @Mutation(() => UserType)
  public register(
    @Args('requestVariables') requestVariables: UserRegisterInput
  ): Promise<Observable<UserType>> {
    return this.userRegisterService.register(requestVariables);
  }

  @Mutation(() => UserType)
  public login(
    @Args('requestVariables') requestVariables: UserLoginInput
  ): Promise<Observable<UserType>> {
    return this.userLoginService.login(requestVariables);
  }

  @Mutation(() => Boolean)
  public verifyEmail(
    @Args('requestVariables') requestVariables: UserVerifyEmailInput
  ): Promise<Observable<boolean>> {
    return this.userVerifyEmailService.verifyEmail(requestVariables);
  }
}
