import React from 'react';
import PropTypes from 'prop-types';

import { Box, TextField, Typography } from '@material-ui/core';

const TextQuestion = ({ question, id, label }) => {
  const d = <TextField id={id} label={label} variant="standard" />;
  return (
    <div className="TextQuestion">
      <Box display="flex" alignItems="center">
        <Typography>
          {question}
        </Typography>
        <Box
          component="form"
        >
          {d}
        </Box>
      </Box>
    </div>
  );
};

TextQuestion.defaultProps = {
  question: '',
  id: '',
  label: '',
};

TextQuestion.propTypes = {
  question: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};

export default TextQuestion;
