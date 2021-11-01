import { Box, TextField, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { isValidPhone } from '../../../../../pages/Proposal/validation';

const PhoneQuestion = ({
  question, label, placeholder, answer, onChange,
}) => {
  const [isValid, setValid] = useState(isEmpty(answer) || isValidPhone(answer));

  return (
    <div className="PhoneQuestion">
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="body2">{question}</Typography>
        <TextField
          label={label}
          value={answer}
          placeholder={placeholder}
          onChange={({ target: { value } }) => {
            setValid(isEmpty(value) || isValidPhone(value));
            onChange(value);
          }}
          error={!isValid}
          helperText={!isValid && 'Ungültige Nummer, Muster: +49 170 123456'}
          variant="outlined"
          size="small"
          fullWidth
        />
      </Box>
    </div>
  );
};

PhoneQuestion.defaultProps = {
  label: '',
  placeholder: '',
};

PhoneQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PhoneQuestion;
