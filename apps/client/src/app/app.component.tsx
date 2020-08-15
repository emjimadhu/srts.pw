import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Paper } from '@material-ui/core';

import {
  apolloClient, getUser, setUser
} from '@srts.pw/client/services/core';

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
