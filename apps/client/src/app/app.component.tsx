import React from 'react';
import { ApolloProvider } from '@apollo/client';
import {
  Paper, Grid, Container, useTheme, TextField, Button, TextFieldProps, OutlinedInputProps
} from '@material-ui/core';
import {
  makeStyles, Theme, createStyles
} from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import {
  apolloClient, getUser, setUser
} from '@srts.pw/client/services/core';
import { ClientComponentsHeader } from '@srts.pw/client/components/header';


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
    },
    paper: {
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
            <Grid item xs={12} sm={9}>
              <Paper elevation={0} className={classes.paper}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} sm={7}>
                    <TextField
                      autoFocus
                      fullWidth
                      required
                      label="Enter URL (ex: https://www.google.com)"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      fullWidth
                      label="Slug"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button
                      color="primary"
                      variant="contained"
                      size="large"
                      disableElevation
                      fullWidth
                      style={{
                        height: '3.5rem'
                      }}
                    >
                      Shorten
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ApolloProvider>
  );
};


export default AppComponent;
