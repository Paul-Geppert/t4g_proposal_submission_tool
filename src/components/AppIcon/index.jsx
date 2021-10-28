/* eslint-disable max-len */
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import appLogo from '../../image/logo_blue.svg';

const AppIcon = ({ size, ...props }) => (
  <div className="AppIcon">
    <Box display="flex" height="100%" alignItems="center" minWidth="fit-content" {...props}>
      <img height={50} src={appLogo} alt="ModelZoo" />
    </Box>
  </div>
);

AppIcon.defaultProps = {
  size: 'small',
};

AppIcon.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
};

export default AppIcon;
