import React from 'react';

import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import MarkdownQuestion from '../MarkdownQuestion';
import withStep from '../../HOC/withStep';

class ContentStep extends React.Component {
  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent = (i) => (value) => {
    const { update, idx, proposal: { content } } = this.props;
    const newContent = content;
    newContent[idx][i] = value;
    update('content')(newContent);
  }

  render() {
    const { idx, proposal: { content } } = this.props;
    const { questions } = this.props;

    return (
      <Box display="flex" flexDirection="column" gap={6}>
        {
          questions.map((q, i) => (
            <Box key={i}>
              {
                q.title && (<Typography>{q.title}</Typography>)
              }
              <MarkdownQuestion
                answer={content[idx][i]}
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
  proposal: PropTypes.shape({
    content: PropTypes.array,
  }).isRequired,
  update: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default withStep(ContentStep);