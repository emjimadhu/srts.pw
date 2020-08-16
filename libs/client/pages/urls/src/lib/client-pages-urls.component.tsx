import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Grid, Card, CardMedia, CardContent, Typography, CardActions, Button
} from '@material-ui/core';
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
  }
}));

export interface IClientPagesUrlsProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientPagesUrls: React.FC = (properties: IClientPagesUrlsProps) => {
  const classes = useStyles();
  const user = getUser();
  const {
    loading, data
  } = useQuery<IListUrlsByUser_ResponseData, IListUrlsByUser_RequestVariables>(LIST_URLS_BY_USER_QUERY, {
    variables: {
      user
    }
  });

  if (!loading) {
    console.log('Data');
    console.log(data.urls);
  }

  return (
    <div className={classes.urlListContainer}>
      <Typography variant="h3">
        List of Shortened Urls
      </Typography>

      {
        loading ? (
          <h3>loading...</h3>
        ) : (
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
                        <Typography variant="body2" color="textSecondary" component="p">
                          {url?.metadata.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          endIcon={<LinkIcon />}
                          target="_blank"
                          href={url?.longUrl}
                          disableElevation
                        >
                          Long Url
                        </Button>
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
        )
      }
    </div>
  );
};


export default ClientPagesUrls;
