import React, {
  useState, useReducer
} from 'react';
import { ApolloProvider } from '@apollo/client';
import {
  Router, Switch, Route
} from 'react-router-dom';

import {
  apolloClient, getUser, setUser
} from '@srts.pw/client/services/core';
import { ClientComponentsHeader } from '@srts.pw/client/components/header';
import { ClientPagesHome } from '@srts.pw/client/pages/home';
import { ClientPagesLinks } from '@srts.pw/client/pages/links';
import { ClientPagesRedirect } from '@srts.pw/client/pages/redirect';
import { ClientPagesRegister } from '@srts.pw/client/pages/register';
import { ClientPagesLogin } from '@srts.pw/client/pages/login';
import { ClientPagesVerifyEmail } from '@srts.pw/client/pages/verify-email';
import { ClientPagesNotFound } from '@srts.pw/client/pages/not-found';
import {
  AppRoutes, UserReducer, userState, UserProvider
} from '@srts.pw/client/shared';

const AppComponent: React.FC = () => {

  const [
    state,
    dispatch
  ] = useReducer(UserReducer, userState);

  if (!getUser()) {
    setUser();
  }

  return (
    <ApolloProvider client={apolloClient}>
      <UserProvider value={{
        state,
        dispatch
      }}>
        <ClientComponentsHeader />
        <Switch>
          <Route exact path={AppRoutes.ROOT}>
            <ClientPagesHome />
          </Route>
          <Route path={AppRoutes.LINKS}>
            <ClientPagesLinks />
          </Route>
          <Route path={AppRoutes.REDIRECT}>
            <ClientPagesRedirect />
          </Route>
          <Route path={AppRoutes.REGISTER}>
            <ClientPagesRegister />
          </Route>
          <Route path={AppRoutes.LOGIN}>
            <ClientPagesLogin />
          </Route>
          <Route path={AppRoutes.VERIFY_EMAIL}>
            <ClientPagesVerifyEmail />
          </Route>

          <Route path="*">
            <ClientPagesNotFound />
          </Route>
        </Switch>
      </UserProvider>
    </ApolloProvider>
  );
};


export default AppComponent;
