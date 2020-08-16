import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import {
  Router, Switch, Route
} from 'react-router-dom';

import {
  apolloClient, getUser, setUser
} from '@srts.pw/client/services/core';
import { ClientComponentsHeader } from '@srts.pw/client/components/header';
import { ClientPagesHome } from '@srts.pw/client/pages/home';
import { ClientPagesUrls } from '@srts.pw/client/pages/urls';
import { ClientPagesRedirect } from '@srts.pw/client/pages/redirect';

const AppComponent: React.FC = () => {
  if (!getUser()) {
    setUser();
  }

  return (
    <ApolloProvider client={apolloClient}>
      <ClientComponentsHeader />
      <Switch>
        <Route exact path="/">
          <ClientPagesHome />
        </Route>
        <Route path="/urls">
          <ClientPagesUrls />
        </Route>
        <Route path="/r/:slug">
          <ClientPagesRedirect />
        </Route>
      </Switch>
    </ApolloProvider>
  );
};


export default AppComponent;
