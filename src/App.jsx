import React from 'react';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/styles';

// import './App.css';
import theme from './theme';
import Footer from './components/Footer';
import Header from './components/Header';
import ProposalTool from './pages/ProposalTool';

const App = () => (
  <div className="ProposalSubmissionTool">
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        <ProposalTool />
        <Footer />
      </Box>
    </ThemeProvider>
  </div>
);

export default App;
