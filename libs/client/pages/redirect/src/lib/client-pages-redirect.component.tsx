import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Grid, CircularProgress
} from '@material-ui/core';
import {
  makeStyles, Theme, createStyles
} from '@material-ui/core/styles';

import './client-pages-redirect.component.scss';

import {
  IGetUserByShortUrl_ResponseData, IGetUserByShortUrl_RequestVariables, GET_USER_BY_SHORT_URL_QUERY
} from './get-url-by-short-url.query';

const useStyles = makeStyles((theme: Theme) => {
  const height = `calc(98vh - ${theme.breakpoints.up('xs') ? '64px' : '54px'})`;
  const space = (value: number) => {
    return theme.spacing(value);
  };

  return createStyles({
    container: {
      marginTop: space(1),
      height,
      padding: space(2)
    },
    progress: {
      paddingBottom: space(2)
    }
  });
});

export interface IClientPagesRedirectProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientPagesRedirect: React.FC = (properties: IClientPagesRedirectProps) => {
  const classes = useStyles();
  const {
    loading, data
  } = useQuery<IGetUserByShortUrl_ResponseData, IGetUserByShortUrl_RequestVariables>(GET_USER_BY_SHORT_URL_QUERY, {
    variables: {
      shortUrl: window.location.href
    }
  });

  if (!loading && data?.getUrlByShortUrl) {
    window.location.href = data.getUrlByShortUrl.longUrl;
  }

  return (
    <Grid container alignItems="center" justify="center" alignContent="center" direction="column" className={classes.container}>
      <Grid item className={classes.progress}>
        <CircularProgress size="74px" />
      </Grid>
      <Grid item>
        Redirecting...
      </Grid>
    </Grid>
  );
};


export default ClientPagesRedirect;
