import { createContext } from 'react';
import { nonBlank } from './validation';

export const empty = {
  name: '',
};

export const context = createContext(empty);

export const validate = (proposal) => ({
  name: nonBlank(proposal.name),
});
