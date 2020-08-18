import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, CircularProgress, Link
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {
  Theme, makeStyles
} from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';

import { getUser } from '@srts.pw/client/services/core';
import { IUrlDocument } from '@srts.pw/client/types';

import {
  IListUrlsByUser_ResponseData, IListUrlsByUser_RequestVariables, LIST_URLS_BY_USER_QUERY
} from './list-urls-by-user.query';

import './client-pages-urls.component.scss';

const useStyles = makeStyles((theme: Theme) => ({
  gridContainer: {
    height: `calc(98vh - ${theme.breakpoints.up('xs') ? '64px' : '54px'})`,
    padding: theme.spacing(2)
  },
  urlListContainer: {
    paddingTop: '20px',
    paddingRight: '50px',
    paddingLeft: '50px'
  },
  urlListGrid: {
    paddingTop: '40px'
  },
  cardMedia: {
    height: 200
  },
  alert: {
    '& .MuiAlert-icon': {
      fontSize: '3rem'
    },
    '& .MuiAlert-message': {
      fontSize: '1.7rem'
    }
  }
}));

export interface IClientPagesUrlsProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientPagesUrls: React.FC = (properties: IClientPagesUrlsProps) => {
  const classes = useStyles();
  const user = getUser();
  const {
    loading, data, error
  } = useQuery<IListUrlsByUser_ResponseData, IListUrlsByUser_RequestVariables>(LIST_URLS_BY_USER_QUERY, {
    variables: {
      user
    }
  });

  if (error) {
    return (
      <Grid container direction="column" alignItems="center" justify="center" alignContent="center" className={classes.gridContainer}>
        <Alert variant="outlined" severity="error" className={classes.alert}>
          {(error.message === 'Failed to fetch') ? 'Can\'t fetch from Server' : error.message}
        </Alert>
      </Grid>
    );
  }

  return (
    <div className={classes.urlListContainer}>
      {
        loading ? (
          <Grid container direction="column" alignItems="center" justify="center" alignContent="center" spacing={2} className={classes.gridContainer}>
            <Grid item>
              <CircularProgress color="primary" size={60} />
            </Grid>
            <Grid item>
              <Typography variant="h4">
                Fetching...
              </Typography>
            </Grid>
          </Grid>
        ) : (data?.urls.length === 0 ? (
          <Grid container direction="column" alignItems="center" justify="center" alignContent="center" className={classes.gridContainer}>
            <Alert variant="outlined" severity="info" className={classes.alert}>
              You don't have any links yet, Please <strong><Link href="/">create one</Link></strong>.
            </Alert>
          </Grid>
        ) : (
          <>
            <Typography variant="h4">
              List of Links
            </Typography>
            <Grid container spacing={4} className={classes.urlListGrid}>
              {
              data?.urls.map((url: IUrlDocument) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={url.id}>
                    <Card>
                      {
                        url?.metadata && <CardMedia
                          className={classes.cardMedia}
                          image={url?.metadata.image}
                          title={url?.metadata.title}
                        />
                      }
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {url?.metadata.title}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p" style={{
                          paddingBottom: '20px'
                        }}>
                          {url?.metadata.description}
                        </Typography>
                        Long Url: <strong>{url?.longUrl}</strong>
                      </CardContent>
                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          disableElevation
                          endIcon={<LinkIcon />}
                          target="_blank"
                          href={url?.shortUrl}
                        >
                          Short Url
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })
              }
            </Grid>
          </>
        ))
      }
    </div>
  );
};


export default ClientPagesUrls;
