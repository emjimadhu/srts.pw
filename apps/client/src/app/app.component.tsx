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
import { AppRoutes } from '@srts.pw/client/types';

const AppComponent: React.FC = () => {
  if (!getUser()) {
    setUser();
  }

  return (
    <ApolloProvider client={apolloClient}>
      <ClientComponentsHeader />
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <ClientPagesHome />
        </Route>
        <Route path={AppRoutes.LINKS}>
          <ClientPagesUrls />
        </Route>
        <Route path={AppRoutes.REDIRECT}>
          <ClientPagesRedirect />
        </Route>
      </Switch>
    </ApolloProvider>
  );
};


export default AppComponent;
