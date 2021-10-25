import { createContext } from 'react';
import { nonBlank } from './validation';

export const empty = {
  name: '',
  markdown: '',
};

export const context = createContext(empty);

export const validate = (proposal) => ({
  name: nonBlank(proposal.name),
  markdown: nonBlank(proposal.markdown),
});
