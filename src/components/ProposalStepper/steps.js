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
        exampleAnswer: 'In diesem Forschungs- und Entwicklungsvorhaben möchten wir ein umweltfreundliches Flugtaxi mit Wasserstoffantrieb entwickeln.',
      },
      {
        title: 'Projektsteckbrief',
        type: 'markdown',
        exampleAnswer: 'b',
      },
      {
        title: 'Management Summary',
        type: 'markdown',
        exampleAnswer: `Flugtaxis (siehe Abbildung 1) bieten eine neuartige Fortbewegungsart.

![Abbildung eines Flutaxis](https://www.golem.de/1905/141054-195064-195063_rc.jpg)
Abbildung 1

Anders als Flugzeuge, handelt es sich um für ein Verkehrsmittel, das für die breite Masse der Bevölkerung gedacht ist.

Damit die Verkehrs- und Klimawende erfolgreich umgesetzt wird, ist das entwickeln neuartiger, umweltfreundlicher Antriebe und Fahrzeuge unerlässlich. Als Konsortium aus Privatwirtschaft und Wissenschaft wollen eben so ein Fahrzeug inklusive umweltfreundlichen, CO2-neutralen Antrieb entwickeln.`,
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
