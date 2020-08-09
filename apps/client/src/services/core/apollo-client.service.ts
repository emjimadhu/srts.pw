import {
  ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject
} from '@apollo/client';

export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:3001/graphql'
  }),
  cache: new InMemoryCache(),
  name: 'srts.pw-wweb-client',
  version: '1.3',
  queryDeduplication: false,
  connectToDevTools: true,
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
