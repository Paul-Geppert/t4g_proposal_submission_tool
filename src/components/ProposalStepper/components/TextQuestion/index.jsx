import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const TextQuestion = ({
  id, label, internalQuestionName, placeholder, answer, onChange, validated,
}) => {
  const [showError, setShowError] = useState(false);
  const isValid = showError && !validated;

  return (
    <div className="TextQuestion">
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
        autoFocus
        required
        fullWidth
      />
    </div>
  );
};

TextQuestion.defaultProps = {
  label: '',
  placeholder: '',
};

TextQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  internalQuestionName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validated: PropTypes.bool.isRequired,
};

export default TextQuestion;