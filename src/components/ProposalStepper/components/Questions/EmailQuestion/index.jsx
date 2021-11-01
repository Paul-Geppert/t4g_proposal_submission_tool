import { Box, TextField, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { isValidEmail } from '../../../../../pages/Proposal/validation';

const EmailQuestion = ({
  question, label, placeholder, answer, onChange,
}) => {
  const [isValid, setValid] = useState(isEmpty(answer) || isValidEmail(answer));

  return (
    <div className="EmailQuestion">
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="body2">{question}</Typography>
        <TextField
          label={label}
          value={answer}
          placeholder={placeholder}
          onChange={({ target: { value } }) => {
            setValid(isEmpty(value) || isValidEmail(value));
            onChange(value);
          }}
          error={!isValid}
          helperText={!isValid && 'Ungültige E-Mail-Adresse.'}
          variant="outlined"
          size="small"
          fullWidth
        />
      </Box>
    </div>
  );
};

EmailQuestion.defaultProps = {
  label: '',
  placeholder: '',
};

EmailQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EmailQuestion;
