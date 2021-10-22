import { Box } from '@mui/material';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Container from '../Container';
import PageHeader from '../PageHeader';

const Page = ({
  children, description, plainTitle, title, wrapContainer,
}) => {
  useEffect(() => {
    document.title = plainTitle || title;
  }, [title, plainTitle]);
  if (isEmpty(title)) return null;
  return (
    <div className="Page">
      <PageHeader title={title} description={description} />
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
