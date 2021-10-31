import { Box, TextField, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { isValidPhone } from '../../../../../pages/Proposal/validation';

const PhoneQuestion = ({
  id, question, label, internalQuestionName, placeholder, answer, onChange,
}) => {
  const [isValid, setValid] = useState(isEmpty(answer) || isValidPhone(answer));

  return (
    <div className="PhoneQuestion">
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="body2">{question}</Typography>
        <TextField
          id={id}
          label={label}
          name={internalQuestionName}
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
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  label: PropTypes.string,
  internalQuestionName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PhoneQuestion;
