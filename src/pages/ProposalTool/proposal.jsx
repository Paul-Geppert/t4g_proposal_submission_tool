import _ from 'lodash';
import { createContext } from 'react';
import { nonBlank } from './validation';

export const empty = {
  welt: '',
};

export const context = createContext(empty);

export const validate = (proposal) => ({
  // content: nonBlank(proposal.content),
});

export const toJS = (proposal) =>
  _.omitBy(
    {
      ...proposal,
    },
    (value) => !_.isBoolean(value) && (_.isNil(value) || _.isEmpty(value)),
  );

export const fromJS = (proposal) => ({
  ...proposal,
  welt: '',
});
