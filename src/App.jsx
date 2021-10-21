import React, { createRef } from 'react';
import Box from '@material-ui/core/Box';
import { CloseOutlined } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import { Route, Switch, withRouter } from 'react-router-dom';

import theme from './theme';
import Footer from './components/Footer';
import Header from './components/Header';
import Proposal from './pages/Proposal';
import Home from './pages/Home';

const App = () => {
  const notistackRef = createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  return (
    <div className="ProposalSubmissionTool">
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          ref={notistackRef}
          action={(key) => (
            <IconButton color="inherit" onClick={onClickDismiss(key)} size="small">
              <CloseOutlined />
            </IconButton>
          )}
          hideIconVariant
          preventDuplicate
        >
          <Box>
            <Header />
            {/* <ProposalTool /> */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/proposals">
                <Proposal />
              </Route>
            </Switch>
            <Footer />
          </Box>
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
};

export default withRouter(App);
