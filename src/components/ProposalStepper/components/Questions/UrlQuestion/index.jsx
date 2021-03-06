import { Box, TextField, Typography } from '@mui/material';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { isValidUrl } from '../../../../../pages/Proposal/validation';

const UrlQuestion = ({
  question, label, placeholder, answer, onChange,
}) => {
  const [isValid, setValid] = useState(isEmpty(answer) || isValidUrl(answer));

  return (
    <div className="UrlQuestion">
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="body2">{question}</Typography>
        <TextField
          label={label}
          value={answer}
          placeholder={placeholder}
          onChange={({ target: { value } }) => {
            setValid(isEmpty(value) || isValidUrl(value));
            onChange(value);
          }}
          error={!isValid}
          helperText={!isValid && 'Ungültige URL.'}
          variant="outlined"
          size="small"
          fullWidth
        />
      </Box>
    </div>
  );
};

UrlQuestion.defaultProps = {
  label: '',
  placeholder: '',
};

UrlQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default UrlQuestion;
