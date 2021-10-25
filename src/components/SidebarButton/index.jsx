import * as React from 'react';
import {
  Box, Button,
} from '@mui/material';
import PropTypes from 'prop-types';

import theme from '../../theme';

const SidebarButton = ({ icon, ...props }) => {
  const ButtonIcon = icon;
  return (
    <Box>
      <Button
        style={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: 0,
          minHeight: 64,
          fontSize: '2em',
        }}
        {...props}
      >
        <ButtonIcon sx={{
          width: '1.5em',
          height: '1.5em',
          color: 'white',
        }}
        />
      </Button>
    </Box>
  );
};

SidebarButton.propTypes = {
  icon: PropTypes.element.isRequired,
};

export default SidebarButton;
