import {
  makeStyles, Theme, createStyles
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const height = `calc(98vh - ${theme.breakpoints.up('xs') ? '64px' : '54px'})`;
  const space = (value: number) => theme.spacing(value);

  return createStyles({
    container: {
      marginTop: space(1),
      height,
      padding: space(2)
    },
    progress: {
      paddingBottom: space(2)
    }
  });
});
