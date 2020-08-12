import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Stack } from '@fluentui/react';

import { apolloClient } from '../services/core/apollo-client.service';
import { stackHorizontalGap } from './app.styles';
import {
  getUser, setUser
} from '../services/core/auth.service';
import AppBarComponent from '../components/app/app-bar/app-bar.component';
import CreateShortUrlComponent from '../components/app/create-short-url/create-short-url.component';


const AppComponent: React.FC = () => {
  if (!getUser()) {
    setUser();
  }

  return (
    <ApolloProvider client={apolloClient}>
      <AppBarComponent />
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        verticalFill
        styles={{
          root: {
            width: '100vw',
            height: '100vh',
            margin: '0 auto',
            textAlign: 'center'
          }
        }}
        tokens={stackHorizontalGap}
      >
        <CreateShortUrlComponent />
      </Stack>
    </ApolloProvider>
  );
};


export default AppComponent;
