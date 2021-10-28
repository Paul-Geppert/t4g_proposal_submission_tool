import {
  AppBar, Box, Toolbar, Typography,
} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react';

import AppIcon from '../AppIcon';

const Header = () => (
  <Box sx={{ flexGrow: 1, my: 3 }} className="ProposalSideHeader">
    <AppBar
      position="static"
      color="header"
      elevation={0}
    >
      <Toolbar>
        <AppIcon />
        <Box sx={{ flexGrow: 1 }} />
        <Box display="flex" alignItems="center">
          <Typography style={{ fontFamily: 'BundessansBold' }}>Anna Antragstellerin</Typography>
          <AccountCircleOutlinedIcon />
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
