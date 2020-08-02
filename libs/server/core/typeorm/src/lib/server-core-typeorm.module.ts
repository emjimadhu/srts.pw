import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import { TableMetadataArgs } from 'typeorm/metadata-args/TableMetadataArgs';

import { environment } from '@srts.pw/server/environments';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: environment.mongoUri,
      useUnifiedTopology: true,
      appname: 'srtspw',
      logging: 'all',
      synchronize: true,
      /*
        Fix for "NoEntityMetadata Found"
        link: https://github.com/nrwl/nx/issues/1393#issuecomment-526135967
      */
      entities: getMetadataArgsStorage().tables.map((table: TableMetadataArgs) => table.target)
    })
  ],
  exports: [TypeOrmModule]
})
export class ServerCoreTypeormModule {}
