import { Box, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const TextQuestion = ({
  id, question, label, internalQuestionName, placeholder, answer, onChange, validated,
}) => {
  const [showError, setShowError] = useState(false);
  const isValid = showError && !validated;

  return (
    <div className="TextQuestion">
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="body2">{question}</Typography>
        <TextField
          id={id}
          label={label}
          name={internalQuestionName}
          value={answer}
          placeholder={placeholder}
          onChange={({ target: { value } }) => {
            setShowError(true);
            onChange(value);
          }}
          error={isValid}
          helperText={isValid && 'This field is required'}
          variant="outlined"
          size="small"
          required
          fullWidth
        />
      </Box>
    </div>
  );
};

TextQuestion.defaultProps = {
  label: '',
  placeholder: '',
};

TextQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  label: PropTypes.string,
  internalQuestionName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
};

export default TextQuestion;
