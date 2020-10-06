import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import lightBlue from '@material-ui/core/colors/lightBlue';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: theme.spacing(10),
      width: '100vw',
      display: 'flex',
      padding: theme.spacing(2),
      backgroundColor: lightBlue['300'],
      color: theme.palette.common.white,
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4">Header</Typography>
    </Box>
  );
};

export default Header;
