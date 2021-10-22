import {
  AppBar, Box, Toolbar, Typography,
} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react';

import AppIcon from '../AppIcon';

const Header = () => (
  <Box sx={{ flexGrow: 1 }} className="ProposalSideHeader">
    <AppBar
      position="static"
      color="header"
      elevation={0}
    >
      <Toolbar>
        <AppIcon />
        <Typography>FörderAssist</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { md: 'flex' } }}>
          <Typography style={{ fontFamily: 'BundessansBold' }}>Anna Antragstellerin</Typography>
          <AccountCircleOutlinedIcon />
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
