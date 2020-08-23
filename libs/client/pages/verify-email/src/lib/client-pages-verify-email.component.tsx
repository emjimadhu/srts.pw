import React, { useState } from 'react';
import {
  Grid, CircularProgress, Typography
} from '@material-ui/core';
import {
  makeStyles, Theme, createStyles
} from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import './client-pages-verify-email.component.scss';

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
  ] = useState(true);
  const [
    displayMessage,
    setDisplayMessage
  ] = useState('Verifying your Email...');
  const parameters = useParams();

  return (
    <Grid container alignItems="center" justify="center" alignContent="center" direction="column" className={classes.container}>
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
    </Grid>
  );
};

export default ClientPagesVerifyEmail;
