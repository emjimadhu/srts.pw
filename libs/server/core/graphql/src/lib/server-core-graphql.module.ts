import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { environment } from '@srts.pw/server/environments';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: !environment.production,
      playground: !environment.production,
      introspection: !environment.production,
      context: ({ // eslint-disable-line @typescript-eslint/typedef
        req, res
      }) => ({
        req,
        res
      })
    })
  ]
})
export class ServerCoreGraphqlModule {}
