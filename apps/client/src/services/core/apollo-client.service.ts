import {
  ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject
} from '@apollo/client';

import { environment } from '@srts.pw/client/environments';

export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: createHttpLink({
    uri: environment.graphQlURL
  }),
  cache: new InMemoryCache(),
  name: 'srts.pw-wweb-client',
  version: '1.3',
  queryDeduplication: false,
  connectToDevTools: !environment.production,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all'
    },
    query: {
      errorPolicy: 'all'
    },
    mutate: {
      errorPolicy: 'all'
    }
  }
});
