import {
  AppBar, Box, Toolbar, Typography,
} from '@mui/material';
import React from 'react';

import AppIcon from '../AppIcon';

import contactImage from '../../image/anstragstellerin.png';

const Header = () => (
  <Box sx={{ flexGrow: 1, my: 3 }} className="ProposalSideHeader">
    <AppBar
      position="static"
      color="header"
      elevation={0}
    >
      <Toolbar>
        <AppIcon
          size="large"
          color="primary"
          sx={{
            height: '50px',
            width: 'auto',
          }}
          linkToHome
        />
        <Box sx={{ flexGrow: 1 }} />
        <Box display="flex" alignItems="center">
          <Typography style={{ fontFamily: 'BundessansBold' }} sx={{ mr: 3 }}>Anna Antragstellerin</Typography>
          <img src={contactImage} alt="Bild von Ansprechpartner:in" height={50} />
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
