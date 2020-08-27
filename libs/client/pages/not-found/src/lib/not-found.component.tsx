import { Lottie } from '@crello/react-lottie';
import {
  Grid, Link, Typography
} from '@material-ui/core';
import React, { FC } from 'react';

import animationData from '../templates/not-found.json';
import { useStyles } from './not-found.style';


export const ClientPagesNotFound: FC = () => {
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
