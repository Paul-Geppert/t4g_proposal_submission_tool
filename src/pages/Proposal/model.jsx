import { nonBlank } from './validation';

export const emptyPerson = {
  city: '',
  country: '',
  faxNumber: '',
  houseNumber: '',
  mailAddress: '',
  name: '',
  phoneNumber: '',
  street: '',
  webAddress: '',
  zipCode: '',
};

export const generateEmptyForSteps = (steps) => {
  const empty = {
    creator: { ...emptyPerson },
    partners: [],
    leader: { ...emptyPerson },
    communicationPartner: { ...emptyPerson },
    executor: '',
    dataProtection: false,
    // freeText will hold an array with length === number of steps
    // each object will be an array holding the answers of the long text input
    // (multiline and markdown questions / answers)
    freeText: [],
  };

  // eslint-disable-next-line guard-for-in
  for (const idx in steps) {
    empty.freeText.push([]);
    if (steps[idx].questions) {
      // eslint-disable-next-line no-unused-vars, guard-for-in
      for (const q of steps[idx].questions) {
        empty.freeText[idx].push({ title: q.title, answer: '' });
      }
    }
  }

  return empty;
};

const validatePerson = (person) => ({
  city: nonBlank(person.city),
  country: nonBlank(person.country),
  faxNumber: nonBlank(person.faxNumber),
  houseNumber: nonBlank(person.houseNumber),
  mailAddress: nonBlank(person.mailAddress),
  name: nonBlank(person.name),
  phoneNumber: nonBlank(person.phoneNumber),
  street: nonBlank(person.street),
  webAddress: nonBlank(person.webAddress),
  zipCode: nonBlank(person.zipCode),
});

const isFreeTextValid = (freeText) => freeText.map((question) => nonBlank(question.answer));

export const validate = (proposal) => ({
  creator: validatePerson(proposal.creator),
  leader: validatePerson(proposal.leader),
  communicationPartner: validatePerson(proposal.communicationPartner),
  partners: proposal.partners.map((p) => validatePerson(p)),
  executor: nonBlank(proposal.executor),
  dataProtection: proposal.dataProtection,
  freeText: proposal.freeText.map((c) => isFreeTextValid(c)),
});

const isPersonComplete = (validated) =>
  [
    'name',
    'city',
    'street',
    'zipCode',
    'houseNumber',
    'country',
  ].every((prop) => validated[prop]);

const isFreeTextComplete = (validated, i) => validated[i].every((a) => a);

export const isComplete = (validated) => (necessaryProperties) => (i) =>
  necessaryProperties.every((prop) => {
    // One of the top level properties
    if (typeof validated[prop] === 'boolean') {
      return validated[prop];
    }
    switch (prop) {
      case 'partners':
        return validated[prop].every((p) => isPersonComplete(p));
      case 'creator':
      case 'leader':
      case 'communicationPartner':
        return isPersonComplete(validated[prop]);
      case 'freeText':
        return isFreeTextComplete(validated[prop], i);
      default:
        return true;
    }
  });
