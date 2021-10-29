import { Box, Button } from '@mui/material';
import React from 'react';

import Link from '../../../components/Link';
import Page from '../../../components/Page';

const ProposalNext = () => (
  <Page
    title="Proposal Next steps"
    description="What you should do next."
    className="ProposalNext"
  >
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      alignItems="center"
    >
      <Link
        externalTarget="https://foerderportal.bund.de/easyonline/"
        target="_blank"
      >
        Zu easy-Online
      </Link>
      <Button
        className="PDFDownload"
        variant="outlined"
        href="http://localhost:3003/"
        sx={{ width: '50%' }}
        download
      >
        Download PDF
      </Button>
      <Button
        className="XMLDownload"
        variant="outlined"
        href="http://localhost:3003/xml/"
        sx={{ width: '50%' }}
        download
      >
        Download XML
      </Button>
    </Box>
  </Page>
);

export default ProposalNext;
