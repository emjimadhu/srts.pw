import React from 'react';
import { ApolloProvider } from '@apollo/client';
import {
  Paper, Grid, TextField, Button
} from '@material-ui/core';
import {
  makeStyles, Theme, createStyles
} from '@material-ui/core/styles';

import {
  apolloClient, getUser, setUser
} from '@srts.pw/client/services/core';
import { ClientComponentsHeader } from '@srts.pw/client/components/header';
import { ClientComponentsCreateUrl } from '@srts.pw/client/components/create-url';


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

  if (!getUser()) {
    setUser();
  }

  return (
    <ApolloProvider client={apolloClient}>
      <ClientComponentsHeader />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justify="center" className={classes.urlInputContainer}>
            <ClientComponentsCreateUrl />
          </Grid>
        </Grid>
      </Grid>
    </ApolloProvider>
  );
};


export default AppComponent;
