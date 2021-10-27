import React from 'react';

import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import MarkdownQuestion from '../MarkdownQuestion';
import withStep from '../../HOC/withStep';

const questions = [{
  description: 'Hallo',
}, {
  description: 'Foo',
}];

class ContentStep extends React.Component {
  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent = (i) => (value) => {
    const { update, proposal: { content } } = this.props;
    const newContent = content;
    newContent[i] = value;
    update('content')(newContent);
  }

  render() {
    const { proposal: { content } } = this.props;

    return (
      <Box display="flex" flexDirection="column" gap={6}>
        {
          questions.map((q, i) => (
            <Box key={i}>
              {
                q.description && (<Typography>{q.description}</Typography>)
              }
              <MarkdownQuestion
                answer={content[i]}
                onChange={this.updateContent(i)}
              />
            </Box>
          ))
        }
      </Box>
    );
  }
}

ContentStep.propTypes = {
  // questions: PropTypes.arrayOf({
  //   type: PropTypes.string.isRequired,
  //   description: PropTypes.string,
  // }).isRequired,
  proposal: PropTypes.shape({
    content: PropTypes.array,
  }).isRequired,
  update: PropTypes.func.isRequired,
};

export default withStep(ContentStep);
