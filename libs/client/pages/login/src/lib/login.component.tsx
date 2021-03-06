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
  useContext, useState, FC
} from 'react';

import { setUser } from '@srts.pw/client/services/core';
import {
  AppRouteNames, AppRoutes, UserActionEnum, UserContext
} from '@srts.pw/client/shared';

import {
  IUserLogin_ResponseData, USER_LOGIN_MUTATION
} from './login.mutation';
import { useStyles } from './login.style';


export const ClientPagesLogin: FC = () => {
  const classes = useStyles();
  const {
    dispatch
  } = useContext(UserContext);

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
  const [userLoginMutation] = useMutation(USER_LOGIN_MUTATION);

  const setDisableSubmitButton = () => {
    return !(!!email && !!password);
  };

  const handleFormSubmit = (event_: React.FormEvent<HTMLFormElement>) => {
    event_.preventDefault();

    if (!waitingForServer) {
      setWaitingForServer(true);
      setError(false);

      try {
        const sendRequest = async() => {
          const fetchResult: FetchResult<IUserLogin_ResponseData> = await userLoginMutation({
            variables: {
              email,
              password
            }
          });

          if (!fetchResult.errors) {
            setEmail('');
            setPassword('');
            dispatch({
              type: UserActionEnum.SET_USER_AND_TOKEN,
              payload: {
                user: fetchResult.data.login
              }
            });
            setUser(fetchResult.data.login);
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
          {AppRouteNames.LOGIN}
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleFormSubmit}
        >
          <Grid container spacing={2}>
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
            {!waitingForServer && 'Login'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href={AppRoutes.REGISTER} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default ClientPagesLogin;
