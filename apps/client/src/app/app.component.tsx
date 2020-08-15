import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from '../services/core/apollo-client.service';
import {
  getUser, setUser
} from '../services/core/auth.service';


const AppComponent: React.FC = () => {
  if (!getUser()) {
    setUser();
  }

  return (
    <ApolloProvider client={apolloClient}>
      <h1>Hello World!!</h1>
    </ApolloProvider>
  );
};


export default AppComponent;
