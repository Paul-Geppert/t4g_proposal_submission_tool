import { Box, TextField, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { isValidEmail } from '../../../../../pages/Proposal/validation';

const EmailQuestion = ({
  id, question, label, internalQuestionName, placeholder, answer, onChange,
}) => {
  const [isValid, setValid] = useState(isEmpty(answer) || isValidEmail(answer));

  return (
    <div className="EmailQuestion">
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="body2">{question}</Typography>
        <TextField
          id={id}
          label={label}
          name={internalQuestionName}
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
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  label: PropTypes.string,
  internalQuestionName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EmailQuestion;
