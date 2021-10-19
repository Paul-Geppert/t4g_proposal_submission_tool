import { Link as MaterialLink, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({
  children, color, externalTarget, ...props
}) => {
  if (externalTarget) {
    return (
      <Typography component="span">
        <MaterialLink color={color} href={externalTarget} {...props} target="_">
          { children }
        </MaterialLink>
      </Typography>
    );
  }

  return (
    <Typography component="span">
      <MaterialLink color={color} component={RouterLink} {...props}>
        { children }
      </MaterialLink>
    </Typography>
  );
};

Link.defaultProps = {
  color: undefined,
  externalTarget: undefined,
};

Link.propTypes = {
  children: PropTypes
    .oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]).isRequired,
  color: PropTypes.string,
  externalTarget: PropTypes.string,
};

export default Link;
