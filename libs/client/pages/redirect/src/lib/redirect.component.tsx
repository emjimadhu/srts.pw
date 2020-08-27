import { useQuery } from '@apollo/client';
import {
  CircularProgress, Grid
} from '@material-ui/core';
import React, { FC } from 'react';

import {
  GET_USER_BY_SHORT_URL_QUERY, IGetUserByShortUrl_RequestVariables, IGetUserByShortUrl_ResponseData
} from './get-url-by-short-url.query';
import { useStyles } from './redirect.style';


export const ClientPagesRedirect: FC = () => {
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
