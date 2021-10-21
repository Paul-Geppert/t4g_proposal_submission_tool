import React, { useEffect } from 'react';

const withStep = (WrappedComponent) => ({
  // eslint-disable-next-line react/prop-types
  proposal, setProposal, ...props
}) => {
  const update = (key) => (value) => {
    setProposal({ ...proposal, [key]: value });
    console.log(key);
    console.log(proposal);
  };

  //   useEffect(() => {
  //     visit();
  //   }, [visit]);

  return (
    <WrappedComponent
      proposal={proposal}
    //   validated={validated}
      update={update}
      {...props}
    />
  );
};

export default withStep;
