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
      },
      {
        title: 'Projektsteckbrief',
      },
      {
        title: 'Management Summary',
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
      },
      {
        title: 'Kernziel des Vorhabens und Projektidee',
      },
      {
        title: 'Erläuterung des Bezugs des Vorhabens zum Förderaufruf ',
      },
      {
        title: 'Abgrenzung und Alleinstellungsmerkmal gegenüber inhaltlich ähnlich gelagerten UAS & Flugtaxis-Förderprojekten',
      },
    ],
  },
];

export default steps;
