import React from 'react';

import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import MarkdownQuestion from '../Questions/MarkdownQuestion';
import withStep from '../../HOC/withStep';

class ContentStep extends React.Component {
  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent = (i) => (value) => {
    const { update, idx, proposal: { content } } = this.props;
    const newContent = content;
    newContent[idx][i].answer = value;
    update('content')(newContent);
  }

  render() {
    const {
      idx,
      questions,
      validated,
      proposal: { content },
    } = this.props;

    return (
      <Box display="flex" flexDirection="column" gap={6}>
        {
          questions.map((q, i) => (
            <Box key={i}>
              {
                q.title && (<Typography sx={{ mb: 3 }} variant="h5">{q.title}</Typography>)
              }
              <MarkdownQuestion
                answer={content[idx][i].answer}
                onChange={this.updateContent(i)}
                validated={validated[idx][i]}
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
  validated: PropTypes.array.isRequired,
};

export default withStep(ContentStep);
