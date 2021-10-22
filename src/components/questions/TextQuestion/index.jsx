import { Box, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import withStep from '../withStep';

const TextQuestion = ({
  id, proposal, update, question, label,
}) => (
  <div className="TextQuestion">
    <Box display="flex" alignItems="center">
      <Typography>
        {question}
      </Typography>
      <Box
        component="form"
      >
        <TextField
          id={id}
          label={label}
          variant="standard"
          onChange={({ target: { value } }) => {
            update(value);
          }}
        />
      </Box>
    </Box>
  </div>
);

TextQuestion.defaultProps = {
  question: '',
  label: '',
};

TextQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  proposal: PropTypes.shape({
    welt: PropTypes.string.isRequired,
  }).isRequired,
  update: PropTypes.func.isRequired,
  question: PropTypes.string,
  label: PropTypes.string,
};

export default withStep(TextQuestion);
