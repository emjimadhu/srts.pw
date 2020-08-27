import {
  makeStyles, Theme, createStyles
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
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
