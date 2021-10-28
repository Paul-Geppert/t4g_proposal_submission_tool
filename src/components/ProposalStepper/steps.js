export const isComplete = (validated) => (properties) =>
  properties.every((prop) => validated[prop]);

const steps = [
  {
    title: 'Schritt 1',
    component: 'core',
    properties: [],
  },
  {
    title: 'Schritt 2',
    component: 'content',
    properties: [],
    questions: [
      {
        title: 'Schritt 2 Frage 1',
      },
      {
        title: 'Schritt 2 Frage 2',
      },
    ],
  },
  {
    title: 'Schritt 3',
    component: 'content',
    properties: [],
    questions: [
      {
        title: 'Schritt 3 Frage 1',
      },
      {
        title: 'Schritt 3 Frage 2',
      },
    ],
  },
];

export default steps;
