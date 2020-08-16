import React from 'react';
import {
  AppBar, Toolbar, Typography, Button
} from '@material-ui/core';
import {
  makeStyles, createStyles, Theme
} from '@material-ui/core/styles';

import './client-components-header.component.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: 'none'
    },
    title: {
      fontWeight: 'bold',
      marginRight: theme.spacing(1)
    },
    subTitle: {
      flexGrow: 1
    }
  })
);

export interface IClientComponentsHeaderProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientComponentsHeader: React.FC = (properties: IClientComponentsHeaderProps) => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      className={classes.root}
    >
      <Toolbar>
        <Typography
          variant="h5"
          className={classes.title}
        >
          SRTS.PW
        </Typography>
        <Typography
          variant="h6"
          className={classes.subTitle}
        >
           - URL Shortner
        </Typography>
        <Button color="inherit" href="/">Home</Button>
        <Button color="inherit" href="/urls">Links</Button>
      </Toolbar>
    </AppBar>
  );
};


export default ClientComponentsHeader;
