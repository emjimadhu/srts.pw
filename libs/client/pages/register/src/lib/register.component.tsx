import {
  FetchResult, useMutation
} from '@apollo/client';
import {
  Avatar, Button, CircularProgress, Collapse, Container, Grid, Link, TextField, Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
  Alert, AlertTitle
} from '@material-ui/lab';
import React, {
  useState, FC
} from 'react';

import { getTemporaryUser } from '@srts.pw/client/services/core';
import {
  AppRouteNames, AppRoutes
} from '@srts.pw/client/shared';

import {
  IUserRegister_ResponseData, USER_REGISTER_MUTATION
} from './register.mutation';
import { useStyles } from './register.style';


export const ClientPagesRegister: FC = () => {
  const classes = useStyles();

  const [
    firstName,
    setFirstName
  ] = useState('');
  const [
    lastName,
    setLastName
  ] = useState('');
  const [
    email,
    setEmail
  ] = useState('');
  const [
    password,
    setPassword
  ] = useState('');
  const [
    waitingForServer,
    setWaitingForServer
  ] = useState(false);
  const [
    error,
    setError
  ] = useState(false);
  const [
    errorMessage,
    setErrorMessage
  ] = useState('');
  const [
    isRegistered,
    setIsRegistered
  ] = useState(false);
  const [userRegisterMutation] = useMutation(USER_REGISTER_MUTATION);

  const setDisableSubmitButton = () => {
    return !(!!firstName && !!lastName && !!email && !!password);
  };

  const handleFormSubmit = (event_: React.FormEvent<HTMLFormElement>) => {
    event_.preventDefault();

    if (!waitingForServer) {
      setWaitingForServer(true);
      setError(false);

      try {
        const sendRequest = async() => {
          const fetchResult: FetchResult<IUserRegister_ResponseData> = await userRegisterMutation({
            variables: {
              email,
              password,
              firstName,
              lastName,
              id: getTemporaryUser()
            }
          });

          console.log(fetchResult);
          if (!fetchResult.errors) {
            console.log(fetchResult.data.register);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setIsRegistered(true);
          } else {
            setError(true);
            const fetchResultErrorMessage = fetchResult.errors[0].message;
            setErrorMessage(fetchResultErrorMessage.includes('duplicate key') ? 'Email already exsists' : fetchResultErrorMessage);
          }
        };

        sendRequest();
      } catch (fetchError) {
        setError(true);
        (fetchError.message === 'Failed to fetch') ? setErrorMessage('Can\'t fetch from Server. Please try again later') : setErrorMessage(fetchError.message);
      } finally {
        setWaitingForServer(false);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {AppRouteNames.REGISTER}
        </Typography>
        {
          !isRegistered ? (
            <form
              className={classes.form}
              noValidate
              onSubmit={handleFormSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    variant="outlined"
                    required
                    fullWidth
                    label="First Name"
                    autoFocus
                    value={firstName}
                    onChange={(event_: React.ChangeEvent<HTMLInputElement>) => {
                      setFirstName(event_.target.value);
                      setError(false);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Last Name"
                    autoComplete="lname"
                    value={lastName}
                    onChange={(event_: React.ChangeEvent<HTMLInputElement>) => {
                      setLastName(event_.target.value);
                      setError(false);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    value={email}
                    onChange={(event_: React.ChangeEvent<HTMLInputElement>) => {
                      setEmail(event_.target.value);
                      setError(false);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="password"
                    value={password}
                    onChange={(event_: React.ChangeEvent<HTMLInputElement>) => {
                      setPassword(event_.target.value);
                      setError(false);
                    }}
                  />
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                disabled={setDisableSubmitButton() || waitingForServer}
                className={classes.submit}
              >
                {waitingForServer && <CircularProgress size={24} />}
                {!waitingForServer && 'Register'}
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href={AppRoutes.LOGIN} variant="body2">
                Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          ) : (
            <Typography variant="h5" className={classes.verificationMessage}>
              Check your Email for Verification Email.
            </Typography>
          )
        }
      </div>
    </Container>
  );
};

export default ClientPagesRegister;
