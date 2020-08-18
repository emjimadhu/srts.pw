import React, { useState } from 'react';
import {
  useHistory, useLocation
} from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, IconButton, Menu, useMediaQuery, Tooltip, List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import {
  makeStyles, createStyles, Theme, useTheme
} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeIcon from '@material-ui/icons/Home';
import LinkIcon from '@material-ui/icons/Link';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';

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
    },
    icon: {
      fontSize: '2rem'
    },
    tooltip: {
      fontSize: '1.5rem'
    }
  })
);

export interface IClientComponentsHeaderProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientComponentsHeader: React.FC = (properties: IClientComponentsHeaderProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.only('xs'));
  const [
    anchorElement,
    setAnchorElement
  ] = useState<null | HTMLElement>();
  const {
    push
  } = useHistory();
  const {
    pathname
  } = useLocation();
  const open = Boolean(anchorElement);

  const handleMenuIconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleMenuItemClick = (path?: string) => {
    if (path) {
      push(path);
    }
    setAnchorElement(null); // eslint-disable-line unicorn/no-null
  };

  const getMenuItems = (isExtraSmall: boolean) => {
    if (isExtraSmall) {
      return (
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuIconClick}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElement}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={open}
            onClose={() => handleMenuItemClick()}
          >
            <List component="nav">
              <ListItem button onClick={() => handleMenuItemClick('/')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="HOME" />
              </ListItem>
              <ListItem button onClick={() => handleMenuItemClick('/urls')}>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary="LINKS" />
              </ListItem>
            </List>
          </Menu>
        </div>
      );
    } else {
      return (
        <>
          <Tooltip title="HOME" arrow classes={{
            tooltip: classes.tooltip
          }}>
            <IconButton color="inherit" aria-label="home" href="/">
              {
                pathname === '/' ? (
                  <HomeIcon className={classes.icon} />
                ) : (
                  <HomeOutlinedIcon className={classes.icon} />
                )
              }
            </IconButton>
          </Tooltip>
          <Tooltip title="LINKS" arrow classes={{
            tooltip: classes.tooltip
          }}>
            <IconButton color="inherit" aria-label="links" href="/urls">
              {
                pathname === '/urls' ? (
                  <LinkIcon className={classes.icon} />
                ) : (
                  <LinkOutlinedIcon className={classes.icon} />
                )
              }
            </IconButton>
          </Tooltip>
        </>
      );
    }
  };

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
        {getMenuItems(isExtraSmallScreen)}
      </Toolbar>
    </AppBar>
  );
};


export default ClientComponentsHeader;
