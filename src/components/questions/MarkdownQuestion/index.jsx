import React from 'react';
import PropTypes from 'prop-types';
import MDEditor from '@uiw/react-md-editor';

import withStep from '../withStep';

const MarkdownQuestion = ({ id, proposal, update }) => (
  <div className="MarkdownQuestion">
    <MDEditor
      value={proposal[id]}
      onChange={update(id)}
    />
  </div>
);

MarkdownQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  proposal: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
};

export default withStep(MarkdownQuestion);
