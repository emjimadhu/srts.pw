import {
  makeStyles, Theme, createStyles
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: 'none'
    },
    menuButton: {
      marginRight: theme.spacing(2)
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
