import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const Container = ({
  children, leftSidebar, rightSidebar, ...props
}) => (
  <Box px={3} maxWidth={1200} mx="auto" display="flex" width="100%" {...props}>
    <Box minWidth={0} maxWidth={224} width="100%">{ leftSidebar }</Box>
    <Box minWidth={0} width="100%">{ children }</Box>
    <Box minWidth={0} maxWidth={224} width="100%">{ rightSidebar }</Box>
  </Box>
);

Container.defaultProps = {
  leftSidebar: [],
  rightSidebar: [],
};

Container.propTypes = {
  children: PropTypes
    .oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]).isRequired,
  leftSidebar: PropTypes
    .oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
  rightSidebar: PropTypes
    .oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
};

export default Container;
