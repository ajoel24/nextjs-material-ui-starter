import React from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

import Header from './Header';
import Footer from './Footer';

type Props = {
  children?: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      maxWidth: '100vw',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    main: {
      flex: '1 0 auto',
      marginTop: theme.spacing(2),
    },
  })
);

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Header />
        <main className={classes.main}>{children}</main>
        <Footer />
      </Box>
    </React.Fragment>
  );
};

export default Layout;
