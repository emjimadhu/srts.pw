import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { convertDaysToSeconds } from '@srts.pw/server/common/types';
import { environment } from '@srts.pw/server/environments';

import { JwtStrategy } from './stratergies/jwt.stratergy';


@Module({
  imports: [
    JwtModule.register({
      secret: environment.jwtSecret,
      signOptions: {
        expiresIn: convertDaysToSeconds(7)
      }
    })
  ],
  providers: [JwtStrategy],
  exports: [JwtModule]
})
export class ServerAuthModule {}
