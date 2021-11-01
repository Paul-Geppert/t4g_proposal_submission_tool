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
      },
      {
        title: 'Projektsteckbrief',
        type: 'markdown',
      },
      {
        title: 'Management Summary',
        type: 'markdown',
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
      },
      {
        title: 'Kernziel des Vorhabens und Projektidee',
        type: 'markdown',
      },
      {
        title: 'Erläuterung des Bezugs des Vorhabens zum Förderaufruf ',
        type: 'markdown',
      },
      {
        title: 'Abgrenzung und Alleinstellungsmerkmal gegenüber inhaltlich ähnlich gelagerten UAS & Flugtaxis-Förderprojekten',
        type: 'markdown',
      },
    ],
  },
];

export default steps;
