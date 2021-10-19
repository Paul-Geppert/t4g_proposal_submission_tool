import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@material-ui/core';
import Page from '../../components/Page';
import TextQuestion from '../../components/questions/TextQuestion';
import MarkdownQuestion from '../../components/questions/MarkdownQuestion';

function generatePDF(value) {
  console.log(value);
}

const ProposalTool = () => (
  <Page
    title="Proposal Tool"
    className="ProposalTool"
  >
    <TextQuestion question="Hallo" id="hallo" label="Welt" />
    <MarkdownQuestion />
    <Button
      className="PDFGeneration"
      onClick={() => generatePDF()}
    >
      Generate PDF
    </Button>
  </Page>
);

export default ProposalTool;
