/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ExecutionContext, Injectable, UnauthorizedException
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  public getRequest(context: ExecutionContext): any {
    const gqlExecutionContext = GqlExecutionContext.create(context);
    return gqlExecutionContext.getContext().req;
  }

  public handleRequest(error: any, user: any, info: any): any {
    if (error || !user) {
      throw error || new UnauthorizedException('Token is Invalid.');
    }
    return user;
  }
}
