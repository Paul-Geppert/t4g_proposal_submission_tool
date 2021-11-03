import React, { useEffect } from 'react';
import { merge } from 'lodash';

const withStep = (WrappedComponent) => ({
  // eslint-disable-next-line react/prop-types
  proposal, setProposal, validated, visit, ...props
}) => {
  const update = (key) => (value) => {
    setProposal((prevProposal) => {
      const newProposal = { ...prevProposal };
      merge(newProposal, { [key]: value });
      return newProposal;
    });
  };

  useEffect(() => {
    visit();
  }, [visit]);

  return (
    <WrappedComponent
      proposal={proposal}
      validated={validated}
      update={update}
      {...props}
    />
  );
};

export default withStep;
