import { Module } from '@nestjs/common';

import { ServerUserService } from './server-user.service';



@Module({
  controllers: [],
  providers: [ServerUserService],
  exports: [ServerUserService]
})
export class ServerUserModule {
}
