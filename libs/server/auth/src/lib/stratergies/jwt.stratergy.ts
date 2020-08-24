import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';

import { environment } from '@srts.pw/server/environments';
import {
  UserLoginService, UserType
} from '@srts.pw/server/user';


const cookieExtractor = (request: Request): string | null => {
  let token: string;
  if (request && request.cookies) {
    token = request.cookies.token;
  }
  return token;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userLoginService: UserLoginService
  ) {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: environment.jwtSecret
    });
  }

  public validate(payload: { id: string; email: string }): Promise<UserType> {
    return this.userLoginService.validateJwtPayload(payload);
  }
}
