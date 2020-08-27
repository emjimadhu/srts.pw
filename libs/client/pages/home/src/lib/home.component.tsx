import { Grid } from '@material-ui/core';
import {
  Alert, AlertTitle
} from '@material-ui/lab';
import React, {
  useState, FC
} from 'react';

import { ClientComponentsCreateLink } from '@srts.pw/client/components/create-link';
import { ClientComponentsLinkPreview } from '@srts.pw/client/components/link-preview';
import { IUrlDocument } from '@srts.pw/client/shared';

import { useStyles } from './home.style';


export const ClientPagesHome: FC = () => {
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
