import React, {
  useState, useEffect
} from 'react';
import {
  Grid, Card, CardContent, Typography, IconButton, CardMedia, Button, Collapse, Link
} from '@material-ui/core';
import {
  makeStyles, Theme, createStyles, useTheme
} from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';

import { IUrlDocument } from '@srts.pw/client/components/create-url';

import './client-components-url-preview.component.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      flex: '1 0 auto'
    },
    cover: {
      width: 151
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2)
    },
    button: {
      marginRight: theme.spacing(2)
    }
  })
);

const getShortUrlComponent = (url: string) => {
  return (
    <>
      Short Url: <Link target="_blank" href={url}><strong>{url}</strong></Link>
    </>
  );
};

export interface IClientComponentsUrlPreviewProps {
  createdUrl: IUrlDocument;
}

export const ClientComponentsUrlPreview: React.FC<IClientComponentsUrlPreviewProps> = ({
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
              <Typography component="h5" variant="h5">
                {createdUrl?.metadata.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {createdUrl?.metadata.description}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {
                  getShortUrlComponent(createdUrl?.shortUrl)
                }
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Button
                endIcon={<LinkIcon />}
                className={classes.button}
                target="_blank"
                href={createdUrl?.longUrl}
              >
              Long Url
              </Button>
              <Button
                variant="contained"
                size="large"
                color="primary"
                disableElevation
                endIcon={<LinkIcon />}
                target="_blank"
                href={createdUrl?.shortUrl}
              >
              Short Url
              </Button>
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


export default ClientComponentsUrlPreview;
