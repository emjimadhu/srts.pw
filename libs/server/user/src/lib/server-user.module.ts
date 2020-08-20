import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserRegisterService } from './services/user-register/user-register.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [
    UserResolver,
    UserRegisterService
  ]
})
export class ServerUserModule {}
