import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserRegisterService } from './services/user-register/user-register.service';
import { UserVerifyEmailService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [
    UserResolver,
    UserRegisterService,
    UserVerifyEmailService
  ]
})
export class ServerUserModule {}
