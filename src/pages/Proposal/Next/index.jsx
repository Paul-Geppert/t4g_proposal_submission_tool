import React from 'react';
import { Button } from '@material-ui/core';
import Page from '../../../components/Page';

const ProposalNext = () => (
  <Page
    title="Proposal Next steps"
    description="What you should do next."
    className="ProposalNext"
  >
    <Button
      className="PDFDownload"
      href="http://localhost:3003/"
      download
    >
      Download PDF
    </Button>
    <Button
      className="XMLDownload"
      href="http://localhost:3003/xml/"
      download
    >
      Download XML
    </Button>
  </Page>
);

export default ProposalNext;
