import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: theme.spacing(10),
      width: '100vw',
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

const FooterText: React.FC = () => (
  <Box>
    <Typography variant="h6">
      <span>
        &copy;
        {new Date().getUTCFullYear()}
      </span>
      . All rights reserved.
    </Typography>
  </Box>
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h5">
        <FooterText />
      </Typography>
    </Box>
  );
};

export default Footer;
