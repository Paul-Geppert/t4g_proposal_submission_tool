// import { nonBlank } from './validation';

export const generateEmptyForSteps = (steps) => {
  const empty = {
    creator: {},
    partners: [],
    leader: {},
    communicationPartner: {},
    executor: '',
    markdown: '',
    content: [],
  };

  // eslint-disable-next-line guard-for-in
  for (const idx in steps) {
    empty.content.push([]);
    if (steps[idx].questions) {
      // eslint-disable-next-line no-unused-vars, guard-for-in
      for (const _i in steps[idx].questions) {
        empty.content[idx].push('');
      }
    }
  }

  return empty;
};

export const validate = (proposal) => ({
  // markdown: nonBlank(proposal.markdown),
});
