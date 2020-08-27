import {
  makeStyles, createStyles, Theme
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const space = (value: number) => theme.spacing(value);

  return createStyles({
    paper: {
      padding: space(2)
    }
  });
});
