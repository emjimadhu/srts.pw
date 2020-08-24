import {
  Module, Global
} from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { convertDaysToSeconds } from '@srts.pw/server/common/types';
import { environment } from '@srts.pw/server/environments';
import { ServerUserModule } from '@srts.pw/server/user';

import { JwtStrategy } from './stratergies/jwt.stratergy';

@Global()
@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      secret: environment.jwtSecret,
      signOptions: {
        expiresIn: convertDaysToSeconds(7)
      }
    }),
    ServerUserModule
  ],
  providers: [JwtStrategy],
  exports: [
    JwtModule,
    PassportModule
  ]
})
export class ServerAuthModule {}
