import {
  Box, Divider, Grid, Step, StepButton, Stepper, Typography,
} from '@mui/material';
// import { styled } from '@mui/material/styles';
import { OrderedSet } from 'immutable';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ContentStep from './components/ContentStep';
import CoreDataStep from './components/CoreDataStep';
import Navigation from './components/Navigation';
import { isComplete } from '../../pages/Proposal/model';

const ProposalCreationStepper = ({
  proposal, setProposal, validated, steps, onSubmit,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [unvisited, setUnvisited] = useState(OrderedSet(steps.map((_, i) => i)));

  const uncompleted = OrderedSet(
    steps
      .map((_, i) => i)
      .filter((step) => !isComplete(validated)(steps[step].necessaryProperties)(step)),
  );

  const visitStep = (step) =>
    setUnvisited(unvisited.delete(step));

  const isLastStep = () => activeStep === steps.length - 1;

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

  return (
    <Box className="ProposalCreationStepper" sx={{ mb: 2 }}>
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={3}>
          <Stepper activeStep={activeStep} orientation="vertical" nonLinear>
            {
              steps.map(({ title, optional }, step) => (
                <Step
                  key={title}
                  completed={!unvisited.includes(step) && !uncompleted.includes(step)}
                  last={isLastStep()}
                >
                  <StepButton
                    onClick={() => setActiveStep(step)}
                    optional={optional && <Typography variant="caption">Optional</Typography>}
                  >
                    {
                      step === activeStep
                        ? <Typography variant="body2" color="primary.main">{title}</Typography>
                        : <Typography variant="body2">{title}</Typography>
                    }
                  </StepButton>
                </Step>
              ))
            }
          </Stepper>
        </Grid>
        <Grid item xs={9}>
          <Box py={1} px={2} minHeight={300}>
            {
              activeStep === 0
                ? (
                  <CoreDataStep
                    proposal={proposal}
                    setProposal={setProposal}
                    validated={validated}
                    visit={() => visitStep(activeStep)}
                  />
                )
                : (
                  <ContentStep
                    proposal={proposal}
                    setProposal={setProposal}
                    validated={validated.freeText}
                    visit={() => visitStep(activeStep)}
                    idx={activeStep}
                    questions={steps[activeStep].questions}
                  />
                )
            }
          </Box>
        </Grid>
      </Grid>
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
      title: PropTypes.string.isRequired,
      component: PropTypes.string.isRequired,
      questions: PropTypes.array,
      necessaryProperties: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      optional: PropTypes.bool,
    }),
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ProposalCreationStepper;
