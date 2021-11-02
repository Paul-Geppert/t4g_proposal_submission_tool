const steps = [
  {
    title: 'Administrative Daten',
    component: 'core',
    properties: ['creator', 'partners', 'leader', 'communicationPartner', 'executor', 'dataProtection'],
  },
  {
    title: 'Vorhabensbeschreibung',
    component: 'content',
    properties: ['content'],
    questions: [
      {
        title: 'Kurzbeschreibung',
        type: 'multilineText',
        exampleAnswer: 'a',
      },
      {
        title: 'Projektsteckbrief',
        type: 'markdown',
        exampleAnswer: 'b',
      },
      {
        title: 'Management Summary',
        type: 'markdown',
        exampleAnswer: 'c',
      },
    ],
  },
  {
    title: 'Gesamtziel des Vorhabens',
    component: 'content',
    properties: ['content'],
    questions: [
      {
        title: 'Einführung, Motivation, Ausgangssituation, ggf. Beispielszenario',
        type: 'markdown',
        exampleAnswer: 'd',
      },
      {
        title: 'Kernziel des Vorhabens und Projektidee',
        type: 'markdown',
        exampleAnswer: 'e',
      },
      {
        title: 'Erläuterung des Bezugs des Vorhabens zum Förderaufruf ',
        type: 'markdown',
        exampleAnswer: 'f',
      },
      {
        title: 'Abgrenzung und Alleinstellungsmerkmal gegenüber inhaltlich ähnlich gelagerten UAS & Flugtaxis-Förderprojekten',
        type: 'markdown',
        exampleAnswer: 'g',
      },
    ],
  },
];

export default steps;
