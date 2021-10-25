import MDEditor from '@uiw/react-md-editor';
import PropTypes from 'prop-types';
import React from 'react';

const MarkdownQuestion = ({
  answer, onChange,
}) => (
  <div className="MarkdownQuestion">
    <MDEditor
      value={answer}
      onChange={(value) => {
        onChange(value);
      }}
    />
    {/* <TextField
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
      /> */}
  </div>
);

MarkdownQuestion.propTypes = {
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MarkdownQuestion;
