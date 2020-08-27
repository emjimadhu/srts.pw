import {
  makeStyles, Theme
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
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
