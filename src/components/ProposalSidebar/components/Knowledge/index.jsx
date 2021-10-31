import * as React from 'react';
import { merge } from 'lodash';

import {
  Box, Button, Typography,
} from '@mui/material';

import contactImage from '../../../../image/logo192.png';

import theme from '../../../../theme';

const Knowledge = React.forwardRef((props, ref) => {
  const contactStyle = {
    style: {
      background: theme.palette.background.default,
      width: 300,
    },
  };
  merge(props, contactStyle);
  return (
    <Box
      className="Kontakt"
      display="flex"
      flexDirection="column"
      alignItems="center"
      ref={ref}
      {...props}
    >
      <Typography variant="h5">Knowhow</Typography>
      <img src={contactImage} alt="Bild von Ansprechpartner:in" />
    </Box>
  );
});

export default Knowledge;
