import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import withStep from '../../HOC/withStep';
import MarkdownQuestion from '../MarkdownQuestion';

const MarkdownStep = ({ proposal, update, validated }) => (
  <div className="MarkdownStep">
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={2}
    >
      <Grid item xs>
        <MarkdownQuestion
          answer={proposal.markdown}
          onChange={update('markdown')}
        />
      </Grid>
    </Grid>
  </div>
);

MarkdownStep.propTypes = {
  proposal: PropTypes.shape({
    markdown: PropTypes.string.isRequired,
  }).isRequired,
  update: PropTypes.func.isRequired,
  validated: PropTypes.object.isRequired,
};

export default withStep(MarkdownStep);
