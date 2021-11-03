import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = 'FörderAssist';
  }, []);

  return (
    <Box
      className="Home"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Button
        color="primary"
        variant="outlined"
        component={Link}
        to="/proposals/create"
        sx={{ maxWidth: '50%' }}
      >
        Neue SKizze erstellen
      </Button>
    </Box>
  );
};

export default Home;
