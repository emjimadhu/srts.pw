import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { environment } from '@srts.pw/server/environments';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: !environment.production,
      playground: !environment.production,
      introspection: !environment.production
    })
  ]
})
export class ServerCoreGraphqlModule {}
