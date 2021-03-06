/* eslint-disable no-console */
import {
  FetchResult, useMutation
} from '@apollo/client';
import {
  Button, CircularProgress, Collapse, Grid, Paper, TextField
} from '@material-ui/core';
import {
  Alert, AlertTitle
} from '@material-ui/lab';
import React, {
  useState, FC
} from 'react';

import {
  getTemporaryUser, getUser
} from '@srts.pw/client/services/core';

import { IClientComponentsCreateLinkProperties } from './create-link-properties.interface';
import {
  CREATE_SHORT_URL_QUERY, ICreateShortUrl_ResponseData
} from './create-link.query';
import { useStyles } from './create-link.style';


const getUrlErrorMessage = (value: string): string => {
  const urlRegEx = new RegExp(/https?:\/\/(www\.)?[\w#%+.:=@~-]{1,256}\.[\d()a-z]{1,6}\b([\w#%&()+./:=?@~-]*)/gi);
  return (!value.match(urlRegEx)) ? 'Should be valid URL. (ex: https://google.com)' : '';
};

export const ClientComponentsCreateLink: FC<IClientComponentsCreateLinkProperties> = ({
  setCreatedUrl,
  setFetchErrorMessage
}) => {
  const classes = useStyles();
  const [
    url,
    setUrl
  ] = useState('');
  const [
    slug,
    setSlug
  ] = useState('');
  const [
    waitingForServer,
    setWaitingForServer
  ] = useState(false);
  const [
    disableButton,
    setDisableButton
  ] = useState(true);
  const [
    error,
    setError
  ] = useState(false);
  const [
    errorMessage,
    setErrorMessage
  ] = useState('');

  const [createShortUrl] = useMutation(CREATE_SHORT_URL_QUERY);

  const handleFormSubmit = (event_: React.FormEvent<HTMLFormElement>) => {
    event_.preventDefault();

    if(getUrlErrorMessage(url).length !== 0) {
      setErrorMessage('Invalid URL Format');
      setError(true);
      setDisableButton(true);
    } else {
      setDisableButton(true);
      setErrorMessage('');
      setError(false);
      setWaitingForServer(true);

      const sendRequest = async() => {
        try {
          const fetchResult: FetchResult<ICreateShortUrl_ResponseData> = await createShortUrl({
            variables: {
              url,
              user: getUser() ? getUser() : getTemporaryUser(),
              slug: (slug.length > 0) ? slug : undefined
            }
          });

          if (!fetchResult.errors) {
            setUrl('');
            setSlug('');
            setCreatedUrl(fetchResult.data.createShortUrl);
          }
        } catch (fetchError) {
          console.log('Error');
          console.log(typeof fetchError);
          console.log(Object.keys(fetchError));
          console.log(fetchError);
          console.log(fetchError.message);
          console.log(fetchError.graphQLErrors);
          console.log(fetchError.networkError);
          console.log(fetchError.extraInfo);
          (fetchError.message === 'Failed to fetch') ? setFetchErrorMessage('Can\'t fetch from Server. Please try again later') : setFetchErrorMessage(fetchError.message);
        } finally {
          setWaitingForServer(false);
          setDisableButton(true);
        }
      };

      sendRequest();
    }
  };

  return (
    <Grid item xs={12} sm={9}>
      <Paper elevation={0} className={classes.paper}>
        <form
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} sm={10}>
              <TextField
                autoFocus
                fullWidth
                required
                value={url}
                error={error}
                disabled={waitingForServer}
                onChange={(event_: React.ChangeEvent<HTMLInputElement>) => {
                  setUrl(event_.target.value);
                  setDisableButton(false);
                }}
                onInput={event_ => {
                  setError(false);
                  setErrorMessage('');
                }}
                label="Enter URL (ex: https://www.google.com)"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                size="large"
                disableElevation
                fullWidth
                disabled={disableButton}
                style={{
                  height: '3.5rem'
                }}
              >
                {waitingForServer && <CircularProgress size={24} />}
                {!waitingForServer && 'Shorten'}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Collapse in={error}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  <strong>{errorMessage}</strong>
                </Alert>
              </Collapse>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};


export default ClientComponentsCreateLink;
