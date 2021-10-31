import MDEditor from '@uiw/react-md-editor';
import PropTypes from 'prop-types';
import React from 'react';

const MarkdownQuestion = ({
  answer, onChange,
}) => (
  <MDEditor
    value={answer}
    onChange={(value) => {
      onChange(value);
    }}
  />
);

MarkdownQuestion.propTypes = {
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MarkdownQuestion;
