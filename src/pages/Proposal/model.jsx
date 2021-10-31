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
    content: [],
    dataProtection: false,
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

export const validate = (proposal) => ({
  creator: validatePerson(proposal.creator),
  leader: validatePerson(proposal.leader),
  communicationPartner: validatePerson(proposal.communicationPartner),
  partners: proposal.partners.map((p) => validatePerson(p)),
  executor: nonBlank(proposal.executor),
  dataProtection: proposal.dataProtection,
});

export const isComplete = (validated) => (properties) =>
  properties.every((prop) => validated[prop]);
