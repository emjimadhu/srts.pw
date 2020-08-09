import React from 'react';
import { ApolloProvider } from '@apollo/client';
import {
  Stack, Text, Link
} from '@fluentui/react';

import { apolloClient } from '../services/core/apollo-client.service';
import {
  stackHorizontalGap, boldStyle
} from './app.component.styles';
import {
  getUser, setUser
} from '../services/core/auth.service';


const AppComponent: React.FC = () => {
  if (!getUser()) {
    setUser();
  }

  return (
    <ApolloProvider client={apolloClient}>
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        verticalFill
        styles={{
          root: {
            width: '100vw',
            height: '100vh',
            margin: '0 auto',
            textAlign: 'center',
            color: '#605e5c'
          }
        }}
        tokens={stackHorizontalGap}
      >
        <Text variant="xxLarge" styles={boldStyle}>
        Welcome to Your UI Fabric App
        </Text>
        <Text variant="large">For a guide on how to customize this project, check out the UI Fabric documentation.</Text>
        <Text variant="large" styles={boldStyle}>
        Essential Links
        </Text>
        <Stack horizontal tokens={stackHorizontalGap} horizontalAlign="center">
          <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
          <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
          <Link href="https://github.com/officeDev/office-ui-fabric-react/">Github</Link>
          <Link href="https://twitter.com/officeuifabric">Twitter</Link>
        </Stack>
        <Text variant="large" styles={boldStyle}>
        Design System
        </Text>
        <Stack horizontal tokens={stackHorizontalGap} horizontalAlign="center">
          <Link href="https://developer.microsoft.com/en-us/fabric#/styles/icons">Icons</Link>
          <Link href="https://developer.microsoft.com/en-us/fabric#/styles/typography">Typography</Link>
          <Link href="https://developer.microsoft.com/en-us/fabric#/styles/themegenerator">Theme</Link>
        </Stack>
      </Stack>
    </ApolloProvider>
  );
};


export default AppComponent;
