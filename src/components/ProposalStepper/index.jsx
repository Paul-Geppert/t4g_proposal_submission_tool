import {
  Box, Divider, Step, StepButton, Stepper, Typography,
} from '@mui/material';
import { OrderedSet } from 'immutable';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Navigation from './components/Navigation';
import { isComplete } from './steps';

const ProposalCreationStepper = ({
  proposal, setProposal, validated, steps, onSubmit,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [unvisited, setUnvisited] = useState(OrderedSet(steps.map((_, i) => i)));
  const uncompleted = OrderedSet(
    steps
      .map((_, i) => i)
      .filter((step) => !isComplete(validated)(steps[step].properties)),
  );

  const visitStep = (step) =>
    setUnvisited(unvisited.delete(step));

  const back = () =>
    setActiveStep(
      activeStep > 0
        ? activeStep - 1
        : 0,
    );

  const next = () =>
    setActiveStep(
      activeStep < steps.length - 1
        ? activeStep + 1
        : 0,
    );

  const StepContent = steps[activeStep].component;

  return (
    <Box className="ProposalCreationStepper" mb={4}>
      <Stepper activeStep={activeStep} alternativeLabel nonLinear style={{ padding: '18px' }}>
        {
          steps.map(({ label, optional }, step) => (
            <Step key={label}>
              <StepButton
                onClick={() => setActiveStep(step)}
                completed={!unvisited.includes(step) && !uncompleted.includes(step)}
                optional={optional && <Typography variant="caption">Optional</Typography>}
                disableRipple
              >
                { label }
              </StepButton>
            </Step>
          ))
        }
      </Stepper>
      <Box py={1} px={2} minHeight={300}>
        <StepContent
          proposal={proposal}
          setProposal={setProposal}
          validated={validated}
          visit={() => visitStep(activeStep)}
        />
      </Box>
      <Box my={2}>
        <Divider />
      </Box>
      <Navigation
        step={activeStep}
        setStep={setActiveStep}
        back={back}
        next={next}
        isComplete={!uncompleted.includes(activeStep)}
        canSubmit={unvisited.isEmpty() && uncompleted.isEmpty()}
        onSubmit={onSubmit}
      />
    </Box>
  );
};

ProposalCreationStepper.propTypes = {
  proposal: PropTypes.object.isRequired,
  setProposal: PropTypes.func.isRequired,
  validated: PropTypes.object.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
      properties: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      optional: PropTypes.bool,
    }),
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ProposalCreationStepper;
