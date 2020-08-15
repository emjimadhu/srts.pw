import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Paper } from '@material-ui/core';

import {
  apolloClient, getUser, setUser
} from '@srts.pw/client/services/core';
import { ClientComponentsHeader } from '@srts.pw/client/components/header';

const AppComponent: React.FC = () => {
  if (!getUser()) {
    setUser();
  }

  return (
    <ApolloProvider client={apolloClient}>
      <ClientComponentsHeader />
      <Paper>
        <h1>Hello World!!</h1>
      </Paper>
    </ApolloProvider>
  );
};


export default AppComponent;
