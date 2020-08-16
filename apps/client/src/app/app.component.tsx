import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Grid } from '@material-ui/core';
import {
  makeStyles, Theme, createStyles
} from '@material-ui/core/styles';

import {
  apolloClient, getUser, setUser
} from '@srts.pw/client/services/core';
import { ClientComponentsHeader } from '@srts.pw/client/components/header';
import {
  ClientComponentsCreateUrl, IUrlDocument
} from '@srts.pw/client/components/create-url';
import { ClientComponentsUrlPreview } from '@srts.pw/client/components/url-preview';


const useStyles = makeStyles((theme: Theme) => {
  const height = `calc(98vh - ${theme.breakpoints.up('xs') ? '64px' : '54px'})`;
  const space = (value: number) => {
    return theme.spacing(value);
  };

  return createStyles({
    root: {
      marginTop: space(1),
      height
    },
    urlInputContainer: {
      height,
      padding: space(2)
    }
  });
});

const AppComponent: React.FC = () => {
  const classes = useStyles();
  const [
    createdUrl,
    setCreatedUrl
  ] = useState<IUrlDocument | undefined>();

  if (!getUser()) {
    setUser();
  }

  if (!createdUrl && JSON.parse(localStorage.getItem('urlDocument'))) {
    setCreatedUrl(JSON.parse(localStorage.getItem('urlDocument')));
  }

  console.log('Created Url');
  console.log(createdUrl);

  return (
    <ApolloProvider client={apolloClient}>
      <ClientComponentsHeader />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justify="center" className={classes.urlInputContainer}>
            <ClientComponentsCreateUrl
              setCreatedUrl={setCreatedUrl}
            />
            <ClientComponentsUrlPreview />
          </Grid>
        </Grid>
      </Grid>
    </ApolloProvider>
  );
};


export default AppComponent;
