import { useQuery } from '@apollo/client';
import {
  Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Grid, Link, Typography
} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import { Alert } from '@material-ui/lab';
import React, { FC } from 'react';

import { getUser } from '@srts.pw/client/services/core';
import {
  AppRoutes, IUrlDocument
} from '@srts.pw/client/shared';

import { useStyles } from './links.style';
import {
  IListUrlsByUser_RequestVariables, IListUrlsByUser_ResponseData, LIST_URLS_BY_USER_QUERY
} from './list-urls-by-user.query';


export const ClientPagesLinks: FC = () => {
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
          {(error.message === 'Failed to fetch') ? 'Can\'t fetch from Server. Please try again later.' : error.message}
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
              You don't have any links yet, Please <strong><Link href={AppRoutes.ROOT}>create one</Link></strong>.
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


export default ClientPagesLinks;
