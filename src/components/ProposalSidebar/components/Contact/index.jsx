import * as React from 'react';
import { merge } from 'lodash';

import {
  Box, Button, Typography,
} from '@mui/material';

import contactImage from '../../../../image/bearbeiter.png';

import theme from '../../../../theme';

const Contact = React.forwardRef((props, ref) => {
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
      gap={3}
      {...props}
    >
      <Typography variant="h5">Ansprechpartner:in</Typography>
      <img src={contactImage} alt="Bild von Ansprechpartner:in" />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="60%"
        gap={3}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>Max Mustermann</Typography>
          <Typography>Projektträger XY</Typography>
        </Box>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          disableElevation
        >
          Kontaktieren
        </Button>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          disableElevation
        >
          Feedback einholen
        </Button>
      </Box>
    </Box>
  );
});

export default Contact;
