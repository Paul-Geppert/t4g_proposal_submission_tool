import React from 'react';

import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@mui/material';
import MarkdownQuestion from '../Questions/MarkdownQuestion';
import TextQuestion from '../Questions/TextQuestion';
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
              <Box display="flex" justifyContent="space-between">
                {
                  q.title && (<Typography sx={{ mb: 3 }} variant="h5">{q.title}</Typography>)
                }
                <Button
                  variant="contained"
                  onClick={() => this.updateContent(i)(q.exampleAnswer || '')}
                  sx={{ backgroundColor: 'red' }}
                >
                  Beispieldaten einfügen
                </Button>
              </Box>
              {
                q.type === 'markdown' && (
                  <MarkdownQuestion
                    answer={content[idx][i].answer}
                    onChange={this.updateContent(i)}
                    validated={validated[idx][i]}
                  />
                )
              }
              {
                q.type === 'multilineText' && (
                  <TextQuestion
                    answer={content[idx][i].answer}
                    onChange={this.updateContent(i)}
                    validated={validated[idx][i]}
                    multiline
                    rows={4}
                  />
                )
              }
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
    type: PropTypes.string.isRequired,
    exampleAnswer: PropTypes.string,
  })).isRequired,
  validated: PropTypes.array.isRequired,
};

export default withStep(ContentStep);
