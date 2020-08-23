import React from 'react';
import { Lottie } from '@crello/react-lottie';
import {
  Grid, Typography, Link
} from '@material-ui/core';
import {
  makeStyles, Theme, createStyles
} from '@material-ui/core/styles';

import animationData from '../templates/not-found.json';

import './client-pages-not-found.component.scss';

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
    lottie: {
      paddingBottom: space(2)
    }
  });
});

export interface IClientPagesNotFoundProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientPagesNotFound: React.FC = (properties: IClientPagesNotFoundProps) => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid container alignItems="center" justify="center" alignContent="center" className={classes.container}>
      <Grid item xs={12} sm={9} className={classes.lottie}>
        <Lottie config={defaultOptions} />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Typography variant="h4">
          The page you looking for doesn't exsists. Go to <Link href="/">Home</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ClientPagesNotFound;
