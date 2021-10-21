import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Page from '../../components/Page';
import TextQuestion from '../../components/questions/TextQuestion';
import MarkdownQuestion from '../../components/questions/MarkdownQuestion';

import { empty, validate, toJS } from './proposal';

function generatePDF(proposal) {
  console.log(proposal);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: '# Das ist der Titel\nSome content\n## Sub-Heading\n' }),
  };

  return fetch('http://localhost:3003/', requestOptions);
}

function generatePDFFromTemplate() {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      master_data: {
        PROJECT_NAME: 'Geiles Projekt',
        PROPOSAL_AUTHOR: 'Paul Geppert',
        PROPOSAL_COMPANY: 'Privat',
        PROPOSAL_ADDRESS: '',
      },
      content: '# Heading 1\nSome content\n## Heading 2\nSome more content',
    }),
  };

  return fetch('http://localhost:3003/replace/', requestOptions);
}

const ProposalTool = () => {
  const [proposal, setProposal] = useState(empty);

  return (
    <Page
      title="Proposal Tool"
      className="ProposalTool"
    >
      <TextQuestion question="Hallo" id="hallo" label="Welt" proposal={proposal} setProposal={setProposal} />
      <MarkdownQuestion id="welt" proposal={proposal} setProposal={setProposal} />
      <Button
        className="PDFGeneration"
        onClick={() => generatePDF(proposal)}
        download
      >
        Generate PDF
      </Button>
      <Button
        className="PDFGeneration"
        onClick={() => generatePDFFromTemplate()}
        download
      >
        Generate PDF From Template
      </Button>
      <Button
        className="PDFDownload"
        href="http://localhost:3003/"
        download
      >
        Download PDF
      </Button>
    </Page>
  );
};

export default ProposalTool;
