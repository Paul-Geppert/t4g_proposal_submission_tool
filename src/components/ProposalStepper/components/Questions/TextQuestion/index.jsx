import { Box, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const TextQuestion = ({
  question, label, placeholder, answer, onChange, validated, ...props
}) => {
  const [showError, setShowError] = useState(false);
  const isValid = showError && !validated;

  return (
    <div className="TextQuestion">
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="body2">{question}</Typography>
        <TextField
          label={label}
          value={answer}
          placeholder={placeholder}
          onChange={({ target: { value } }) => {
            setShowError(true);
            onChange(value);
          }}
          error={isValid}
          helperText={isValid && 'Dieses Feld ist verpflichtend.'}
          variant="outlined"
          size="small"
          fullWidth
          {...props}
        />
      </Box>
    </div>
  );
};

TextQuestion.defaultProps = {
  question: '',
  label: '',
  placeholder: '',
};

TextQuestion.propTypes = {
  question: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
};

export default TextQuestion;
