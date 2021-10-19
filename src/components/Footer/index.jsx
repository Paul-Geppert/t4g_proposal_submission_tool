import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import Link from '../Link';

const Footer = () => (
  <footer className="footer">
    <Container maxWidth="sm">
      <Box py={2}>
        <Typography align="center">
          <Link
            externalTarget="https://tech.4germany.org/fellowship-2021/"
            target="_blank"
          >
            More about this project
          </Link>
        </Typography>
      </Box>
    </Container>
  </footer>
);

export default Footer;
