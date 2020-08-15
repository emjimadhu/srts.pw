import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Paper } from '@material-ui/core';

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
      <Paper>
        <h1>Hello World!!</h1>
      </Paper>
    </ApolloProvider>
  );
};


export default AppComponent;
