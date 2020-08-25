import React, {
  useState, useEffect
} from 'react';
import {
  Grid, CircularProgress, Typography, Collapse
} from '@material-ui/core';
import {
  makeStyles, Theme, createStyles
} from '@material-ui/core/styles';
import {
  Alert, AlertTitle
} from '@material-ui/lab';
import {
  useParams, useHistory
} from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {
  useMutation, FetchResult
} from '@apollo/client';

import { AppRoutes } from '@srts.pw/client/shared';
import './client-pages-verify-email.component.scss';

import {
  USER_VERIFY_EMAIL_MUTATION, IUserVerifyEmail_ResponseData
} from './verify-email.mutation';

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
    },
    icon: {
      fontSize: '74px'
    }
  });
});

export interface IClientPagesVerifyEmailProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientPagesVerifyEmail: React.FC = (properties: IClientPagesVerifyEmailProps) => {
  const classes = useStyles();
  const [
    isVerified,
    setIsVerified
  ] = useState(false);
  const [
    displayMessage,
    setDisplayMessage
  ] = useState('Verifying your Email...');
  const {
    token
  } = useParams<{token: string}>();
  const {
    push
  } = useHistory();
  const [
    error,
    setError
  ] = useState(false);
  const [
    errorMessage,
    setErrorMessage
  ] = useState('');

  const [userVerifyEmailMutation] = useMutation(USER_VERIFY_EMAIL_MUTATION);

  console.log('Normal', token);

  useEffect(() => {
    const sendRequest = async() => {
      try {
        const fetchResult: FetchResult<IUserVerifyEmail_ResponseData> = await userVerifyEmailMutation({
          variables: {
            token
          }
        });

        if (!fetchResult.errors) {
          setIsVerified(true);
          setDisplayMessage('Email successfully Verified. Redirecting to Login');
          setError(false);
          setTimeout(() => {
            push(AppRoutes.LOGIN);
          }, 500);
        } else {
          setError(true);
          const fetchResultErrorMessage = fetchResult.errors[0].message;
          setErrorMessage(fetchResultErrorMessage.includes('duplicate key') ? 'Email already exsists' : fetchResultErrorMessage);
        }
      } catch(fetchError) {
        setError(true);
        (fetchError.message === 'Failed to fetch') ? setErrorMessage('Can\'t fetch from Server. Please try again later') : setErrorMessage(fetchError.message);
      }
    };

    console.log(token);

    sendRequest();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Grid container alignItems="center" justify="center" alignContent="center" direction="column" className={classes.container}>
      {
        !error ? (
          <>
            <Grid item className={classes.progress}>
              {
                !isVerified ? (
                  <CircularProgress size="74px" />
                ) : (
                  <CheckCircleIcon color="primary" className={classes.icon} />
                )
              }
            </Grid>
            <Grid item>
              {
                !isVerified ? (
                  <Typography
                    variant="h4"
                  >
                    {displayMessage}
                  </Typography>
                ) : (
                  <div></div>
                )
              }
            </Grid>
          </>
        ) : (
          <Grid item>
            <Collapse in={error}>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>{errorMessage}</strong>
              </Alert>
            </Collapse>
          </Grid>
        )
      }
    </Grid>
  );
};

export default ClientPagesVerifyEmail;
