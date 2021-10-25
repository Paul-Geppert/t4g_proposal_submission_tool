import { Box, Typography } from '@mui/material';
import { isString } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const PageHeader = ({
  description, title,
}) => (
  <Box display="flex" flexDirection="column">
    <Typography
      component="span"
      variant="h5"
      gutterBottom
      noWrap
    >
      {title}
    </Typography>
    {!!description && (
      isString(description)
        ? <Typography variant="subtitle1" color="textSecondary" gutterBottom>{description}</Typography>
        : description
    )}
  </Box>
);

PageHeader.defaultProps = {
  description: '',
};

PageHeader.propTypes = {
  description: PropTypes
    .oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
  title: PropTypes
    .oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]).isRequired,
};

export default PageHeader;
