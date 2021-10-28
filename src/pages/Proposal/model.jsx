// import { nonBlank } from './validation';

export const generateEmptyForSteps = (steps) => {
  const empty = {
    creator: {},
    partners: [],
    leader: {},
    communicationPartner: {},
    executor: '',
    content: [],
  };

  // eslint-disable-next-line guard-for-in
  for (const idx in steps) {
    empty.content.push([]);
    if (steps[idx].questions) {
      // eslint-disable-next-line no-unused-vars, guard-for-in
      for (const q of steps[idx].questions) {
        empty.content[idx].push({ title: q.title, answer: '' });
      }
    }
  }

  return empty;
};

export const validate = (proposal) => ({
  // markdown: nonBlank(proposal.markdown),
});
