import {
  AppBar, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, SvgIcon, Toolbar, Tooltip, Typography, useMediaQuery
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FaceIcon from '@material-ui/icons/Face';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LinkIcon from '@material-ui/icons/Link';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import React, {
  useState, FC
} from 'react';
import {
  useHistory, useLocation
} from 'react-router-dom';

import {
  AppRouteNames, AppRoutes
} from '@srts.pw/client/shared';

import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { useStyles } from './header.style';


export const ClientComponentsHeader: FC = () => {
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
              <ListItem button onClick={() => handleMenuItemClick(AppRoutes.ROOT)}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={AppRouteNames.HOME} />
              </ListItem>
              <ListItem button onClick={() => handleMenuItemClick(AppRoutes.LINKS)}>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary={AppRouteNames.LINKS} />
              </ListItem>
              <ListItem button onClick={() => handleMenuItemClick(AppRoutes.REGISTER)}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={AppRouteNames.REGISTER.toUpperCase()} />
              </ListItem>
              <ListItem button onClick={() => handleMenuItemClick(AppRoutes.LOGIN)}>
                <ListItemIcon>
                  <FaceIcon />
                </ListItemIcon>
                <ListItemText primary={AppRouteNames.LOGIN.toUpperCase()} />
              </ListItem>
            </List>
          </Menu>
        </div>
      );
    } else {
      return (
        <>
          <Tooltip title={AppRouteNames.HOME} arrow classes={{
            tooltip: classes.tooltip
          }}>
            <IconButton color="inherit" href={AppRoutes.ROOT}>
              {
                pathname === AppRoutes.ROOT ? (
                  <HomeIcon className={classes.icon} />
                ) : (
                  <HomeOutlinedIcon className={classes.icon} />
                )
              }
            </IconButton>
          </Tooltip>
          <Tooltip title={AppRouteNames.LINKS} arrow classes={{
            tooltip: classes.tooltip
          }}>
            <IconButton color="inherit" aria-label="links" href={AppRoutes.LINKS}>
              {
                pathname === AppRoutes.LINKS ? (
                  <LinkIcon className={classes.icon} />
                ) : (
                  <LinkOutlinedIcon className={classes.icon} />
                )
              }
            </IconButton>
          </Tooltip>
          <Tooltip title={AppRouteNames.REGISTER.toUpperCase()} arrow classes={{
            tooltip: classes.tooltip
          }}>
            <IconButton color="inherit" aria-label="links" href={AppRoutes.REGISTER}>
              {
                pathname === AppRoutes.REGISTER ? (
                  <AccountCircleIcon className={classes.icon} />
                ) : (
                  <AccountCircleOutlinedIcon className={classes.icon} />
                )
              }
            </IconButton>
          </Tooltip>
          <Tooltip title={AppRouteNames.LOGIN.toUpperCase()} arrow classes={{
            tooltip: classes.tooltip
          }}>
            <IconButton color="inherit" aria-label="links" href={AppRoutes.LOGIN}>
              {
                pathname === AppRoutes.LOGIN ? (
                  <FaceIcon className={classes.icon} />
                ) : (
                  <FaceOutlinedIcon className={classes.icon} />
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
        <SvgIcon className={classes.menuButton}>
          <LogoSvg />
        </SvgIcon>
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
