import { CloseOutlined, NavigateBeforeOutlined, NavigateNextOutlined } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Navigation = ({
  step, back, next, isComplete, canSubmit, onSubmit,
}) => {
  const history = useHistory();

  return (
    <Box display="flex" mt={2} alignItems="center">
      <Button
        onClick={history.goBack}
        startIcon={<CloseOutlined />}
      >
        Cancel
      </Button>
      <Button
        disabled={step === 0}
        onClick={() => back(step)}
        startIcon={<NavigateBeforeOutlined />}
      >
        Back
      </Button>
      <Box flexGrow={1} />
      {
        canSubmit
          ? (
            <Button
              color="primary"
              onClick={onSubmit}
              variant="contained"
            >
              Submit
            </Button>
          ) : (
            <Button
              color="secondary"
              onClick={next}
              variant="contained"
              endIcon={<NavigateNextOutlined />}
              disabled={!isComplete}
              disableElevation
            >
              Next
            </Button>
          )
      }
    </Box>
  );
};

Navigation.propTypes = {
  step: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
  isComplete: PropTypes.bool.isRequired,
  canSubmit: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Navigation;
