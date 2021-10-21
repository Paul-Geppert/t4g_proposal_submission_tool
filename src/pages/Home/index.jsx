import { Box, Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = 'Fördern fördern';
  }, []);

  return (
    <Box
      className="Home"
      display="flex"
      flexDirection="column"
    >
      <Button
        color="inherit"
        variant="outlined"
        component={Link}
        to="/proposals/create"
      >
        Create new proposal
      </Button>
      <Button
        color="inherit"
        variant="outlined"
        component={Link}
        to="/proposals/next"
      >
        See next steps
      </Button>
    </Box>
  );
};

export default Home;
