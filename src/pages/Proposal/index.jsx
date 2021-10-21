import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Creation from './Creation';
import Next from './Next';

const Proposal = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/create`}>
        <Creation />
      </Route>
      <Route exact path={`${path}/next`}>
        <Next />
      </Route>
    </Switch>
  );
};

export default Proposal;
