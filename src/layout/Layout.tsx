import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

import Header from './Header';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
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
  }),
);

const Layout: React.FC<Props> = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Header />
        <main className={classes.main}>{children}</main>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
