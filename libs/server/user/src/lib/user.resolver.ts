import { UseGuards } from '@nestjs/common';
import {
  Args, Mutation, Query, Resolver
} from '@nestjs/graphql';
import { Response } from 'express';
import { Observable } from 'rxjs';

import {
  convertDaysToSeconds, GqlAuthGuard, ResponseGql
} from '@srts.pw/server/common/types';
import { environment } from '@srts.pw/server/environments';

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
  @UseGuards(GqlAuthGuard)
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
  public async login(
    @Args('requestVariables') requestVariables: UserLoginInput,
    @ResponseGql() response: Response
  ): Promise<UserType> {
    const loginDetails = await (await this.userLoginService.login(requestVariables)).toPromise();
    const seconds = convertDaysToSeconds(7);
    const date = new Date();
    date.setSeconds(seconds);
    response.cookie('token', loginDetails.accessToken, {
      httpOnly: true,
      expires: date,
      secure: environment.production
    });
    return loginDetails.user;
  }

  @Mutation(() => Boolean)
  public verifyEmail(
    @Args('requestVariables') requestVariables: UserVerifyEmailInput
  ): Promise<Observable<boolean>> {
    return this.userVerifyEmailService.verifyEmail(requestVariables);
  }
}
