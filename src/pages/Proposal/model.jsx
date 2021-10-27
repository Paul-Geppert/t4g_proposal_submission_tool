import { createContext } from 'react';
import { nonBlank } from './validation';

export const empty = {
  creator: {},
  partners: [],
  leader: {},
  communicationPartner: {},
  executor: '',
  markdown: '',
  content: ['', ''],
};

export const context = createContext(empty);

export const validate = (proposal) => ({
  markdown: nonBlank(proposal.markdown),
});
