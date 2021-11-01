import { Box, Typography } from '@mui/material';
import MDEditor from '@uiw/react-md-editor';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const MarkdownQuestion = ({
  answer, onChange, validated,
}) => {
  const [showError, setShowError] = useState(false);

  return (
    <Box display="flex" flexDirection="column">
      <MDEditor
        value={answer}
        onChange={(value) => {
          setShowError(true);
          onChange(value);
        }}
      />
      {showError && !validated && (
        <Typography
          variant="caption"
          color="error"
        >
          Dieses Feld darf nicht leer sein.
        </Typography>
      )}
    </Box>
  );
};

MarkdownQuestion.propTypes = {
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
};

export default MarkdownQuestion;
