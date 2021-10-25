import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import withStep from '../../HOC/withStep';
import TextQuestion from '../TextQuestion';

const GeneralStep = ({ proposal, update, validated }) => (
  <div className="GeneralStep">
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={2}
    >
      <Grid item xs>
        <TextQuestion
          id="foo"
          question="Wie lautet der Name des Projekts?"
          label="Projektname"
          internalQuestionName="hidden name"
          placeholder="Name des Projektes"
          answer={proposal.name}
          onChange={update('name')}
          validated={validated.name}
        />
      </Grid>
    </Grid>
  </div>
);

GeneralStep.propTypes = {
  proposal: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  update: PropTypes.func.isRequired,
  validated: PropTypes.object.isRequired,
};

export default withStep(GeneralStep);
