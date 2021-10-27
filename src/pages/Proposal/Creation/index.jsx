import { Grid } from '@mui/material';
import { get } from 'lodash';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { empty, validate } from '../model';
import * as Proposal from '../../../api/proposal';
import Page from '../../../components/Page';
import ProposalStepper from '../../../components/ProposalStepper';
import steps from '../../../components/ProposalStepper/steps';
import ProposalSidebar from '../../../components/ProposalSidebar';

const ProposalCreation = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [proposal, setProposal] = useState(empty);
  const creationSteps = ['Administrative Daten', 'General Information 2'];

  const onSubmit = () =>
    Proposal
      .create({ content: `# ${proposal.name}\n${proposal.markdown}` })
      .then(() => {
        history.push('next');
      })
      .catch((error) => enqueueSnackbar(get(error, 'response.body.error', 'Could not create PDF for proposal!'), { variant: 'error' }));

  return (
    <div>
      {/* <Button
        component={Link}
        to="/"
        startIcon={<NavigateBeforeOutlined />}
      >
        Back
      </Button> */}
      <Page
        title="Schreibtisch"
        // description="A proposal is the first step of a public funding process."
        className="ProposalCreation"
      >
        <Grid container>
          <Grid item xs={11}>
            <ProposalStepper
              proposal={proposal}
              setProposal={setProposal}
              validated={validate(proposal)}
              steps={creationSteps.map((step) => ({ ...steps.get(step), label: step }))}
              onSubmit={onSubmit}
            />
          </Grid>
          <Grid item xs={1}>
            <ProposalSidebar />
          </Grid>
        </Grid>
      </Page>
    </div>
  );
};

export default ProposalCreation;
