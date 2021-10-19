import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Button } from '@material-ui/core';
import Page from '../../components/Page';
import TextQuestion from '../../components/questions/TextQuestion';

function generatePDF(value) {
  console.log(value);
}

const ProposalTool = () => {
  const [value, setValue] = React.useState('**Hello world!!!**');

  return (
    <Page
      title="Proposal Tool"
      className="ProposalTool"
    >
      <TextQuestion id="hallo" />
      <div className="container">
        <MDEditor
          value={value}
          onChange={setValue}
        />
        {/* <MDEditor.Markdown source={value} /> */}
      </div>
      <Button
        className="PDFGeneration"
        onClick={() => generatePDF(value)}
      >
        Generate PDF
      </Button>
    </Page>
  );
};

export default ProposalTool;
