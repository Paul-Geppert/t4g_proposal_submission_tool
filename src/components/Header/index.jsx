import {
  AppBar, Box, Toolbar,
} from '@mui/material';
import React from 'react';

import AppIcon from '../AppIcon';

const Header = () => (
  <div className="AppBar">
    <AppBar
      position="static"
      color="secondary"
      elevation={0}
    >
      <Toolbar>
        <Box display="flex" maxWidth={1200} justifyContent="center" width="100%" mx="auto">
          <Box display="flex" minWidth={200} justifyContent="flex-end" alignItems="center">
            <AppIcon />
            Fördern fördern
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
