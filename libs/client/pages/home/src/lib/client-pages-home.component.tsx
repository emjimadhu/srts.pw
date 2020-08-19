import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import {
  makeStyles, Theme, createStyles
} from '@material-ui/core/styles';
import {
  Alert, AlertTitle
} from '@material-ui/lab';

import { ClientComponentsCreateLink } from '@srts.pw/client/components/create-link';
import { ClientComponentsLinkPreview } from '@srts.pw/client/components/link-preview';
import { IUrlDocument } from '@srts.pw/client/types';

import './client-pages-home.component.scss';

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

export interface IClientPagesHomeProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientPagesHome: React.FC = (properties: IClientPagesHomeProps) => {
  const classes = useStyles();
  const [
    createdUrl,
    setCreatedUrl
  ] = useState<IUrlDocument | undefined>();
  const [
    fetchErrorMessage,
    setFetchErrorMessage
  ] = useState('');

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container alignItems="center" justify="center" alignContent="center" className={classes.urlInputContainer}>
          <ClientComponentsCreateLink
            setCreatedUrl={setCreatedUrl}
            setFetchErrorMessage={setFetchErrorMessage}
          />
          {
            !!fetchErrorMessage && (
              <Grid item xs={12} sm={9}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {fetchErrorMessage}
                </Alert>
              </Grid>
            )
          }
          <ClientComponentsLinkPreview
            createdUrl={createdUrl}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};


export default ClientPagesHome;
