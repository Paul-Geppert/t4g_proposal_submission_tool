import { Box, Typography } from '@mui/material';
import { isEmpty, isString } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import theme from '../../theme';
import Container from '../Container';

const Page = ({
  children, description, plainTitle, title, wrapContainer,
}) => {
  useEffect(() => {
    document.title = plainTitle || title;
  }, [title, plainTitle]);
  if (isEmpty(title)) return null;
  return (
    <div className="Page">
      <div style={{ backgroundColor: theme.palette.background.default }}>
        <Container>
          <Box display="flex" flexDirection="column">
            <Box display="flex" justifyContent={description ? 'flexStart' : 'center'} pb={description ? 0 : 1}>
              <Typography gutterBottom noWrap component="span" variant="h5">
                { title }
              </Typography>
            </Box>
            {!!description && (
              isString(description)
                ? <Typography variant="subtitle1" color="textSecondary" gutterBottom>{ description }</Typography>
                : description
            )}
          </Box>
        </Container>
      </div>
      <Box mb={2}>
        {
          wrapContainer
            ? (<Container>{ children }</Container>)
            : children
        }
      </Box>
    </div>
  );
};

Page.defaultProps = {
  description: undefined,
  plainTitle: undefined,
  wrapContainer: true,
};

Page.propTypes = {
  children: PropTypes
    .oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]).isRequired,
  description: PropTypes
    .oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
  plainTitle: PropTypes.string,
  title: PropTypes
    .oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]).isRequired,
  wrapContainer: PropTypes.bool,
};

export default Page;
