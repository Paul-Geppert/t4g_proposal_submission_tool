import React from 'react';

import { Box, TextField, Typography } from '@material-ui/core';

const TextQuestion = (id) => {
  const d = <TextField id={id} />;
  return (
    <div className="TextQuestion">
      <Box display="flex" alignItems="center">
        <Typography>
          Hallo:
        </Typography>
        <Box
          component="form"
        >
          {d}
        </Box>
      </Box>
    </div>
  );
};

export default TextQuestion;
