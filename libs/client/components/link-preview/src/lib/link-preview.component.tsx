import {
  Button, Card, CardContent, CardMedia, Collapse, Grid, Link, Typography
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';
import React, {
  useEffect, useState, FC
} from 'react';

import { useStyles } from './like-preview.style';
import { IClientComponentsLinkPreviewProperties } from './link.preview-properties.interface';


const getShortUrlComponent = (url: string) => {
  return (
    <Link target="_blank" href={url}><strong>{url}</strong></Link>
  );
};

export const ClientComponentsLinkPreview: FC<IClientComponentsLinkPreviewProperties> = ({
  createdUrl
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [
    open,
    setOpen
  ] = useState(false);

  useEffect(() => {
    setOpen(false);
    if (createdUrl) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [createdUrl]);

  return (
    <Grid item xs={12} sm={9}>
      <Collapse in={open}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" noWrap variant="h5">
                {createdUrl?.metadata.title}
              </Typography>
              <Typography variant="subtitle1" noWrap color="textSecondary">
                {createdUrl?.metadata.description}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Typography variant="h6" noWrap>
                {
                  getShortUrlComponent(createdUrl?.shortUrl)
                }
              </Typography>
            </div>
          </div>
          {createdUrl && <CardMedia
            className={classes.cover}
            image={createdUrl?.metadata.image}
            title={createdUrl?.metadata.title}
          />}
        </Card>
      </Collapse>
    </Grid>
  );
};


export default ClientComponentsLinkPreview;
