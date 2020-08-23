import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserRegisterService } from './services/user-register/user-register.service';
import { UserVerifyEmailService } from './services';
import { UserLoginService } from './services/user-login/user-login.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [
    UserResolver,
    UserRegisterService,
    UserLoginService,
    UserVerifyEmailService
  ]
})
export class ServerUserModule {}
