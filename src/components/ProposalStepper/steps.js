const steps = [
  {
    title: 'Administrative Daten',
    component: 'core',
    properties: ['creator', 'partners', 'leader', 'communicationPartner', 'executor', 'dataProtection'],
  },
  {
    title: 'Vorhabensbeschreibung',
    component: 'content',
    properties: ['freeText'],
    questions: [
      {
        title: 'Kurzbeschreibung',
        type: 'multilineText',
        exampleAnswer: 'In diesem Forschungs- und Entwicklungsvorhaben möchten wir ein umweltfreundliches Flugtaxi mit Wasserstoffantrieb entwickeln.',
      },
      {
        title: 'Projektsteckbrief',
        type: 'markdown',
        exampleAnswer: `## Projektziel

Entwicklung eines **umweltfreundlichen** Flugtaxis zum Transport von bis zu 4 Personen. Folgende Eigenschaften sollen erzielt werden:

- umweltfreundlicher Antrieb auf Wasserstoffbasis
- leiser Antrieb
- Zulassung für Flugbetrieb

## Verwertungsabsicht

Im Anschluss soll das Flugtaxi im privaten **öffentlichen Nahverkehr** angeboten werden. Ferner soll es aber auch frei verfügbar, z.B. im **Einzelhandel** oder in ähnlichen Modellen wie Car-Sharing.`,
      },
      {
        title: 'Management Summary',
        type: 'markdown',
        exampleAnswer: `Flugtaxis (siehe Abbildung 1) bieten eine neuartige Fortbewegungsart.

![Abbildung eines Flugtaxis](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Volocopter%2CIAA_2017%2C_Frankfurt_%281Y7A1911%29.jpg/800px-Volocopter%2CIAA_2017%2C_Frankfurt_%281Y7A1911%29.jpg)
Abbildung 1

Anders als Flugzeuge, handelt es sich um für ein Verkehrsmittel, das für die breite Masse der Bevölkerung gedacht ist.

Damit die Verkehrs- und Klimawende erfolgreich umgesetzt wird, ist das entwickeln neuartiger, umweltfreundlicher Antriebe und Fahrzeuge unerlässlich. Als Konsortium aus Privatwirtschaft und Wissenschaft wollen eben so ein Fahrzeug inklusive umweltfreundlichen, CO2-neutralen Antrieb entwickeln.`,
      },
    ],
  },
  {
    title: 'Gesamtziel des Vorhabens',
    component: 'content',
    properties: ['freeText'],
    questions: [
      {
        title: 'Einführung, Motivation, Ausgangssituation, ggf. Beispielszenario',
        type: 'markdown',
        exampleAnswer: `Ein umweltfreundliches Lufttaxi löst die meisten der aktuellen Verkehrsprobleme, wie in der Tabelle unten zu sehen ist:

Problem | Lösung
---- | ----
Klimakriese | Wasserstoffantrieb
Verstopfte Straßen | Nutzung Luftraum
Straßenbau | Luftraum ist wartungsfrei

Auch Tech4Germany-Fellows bekunden Interesse:

> "Ich hätte auch gern so ein Flugtaxi für mich und meine Familie" (Paul)`,
      },
      {
        title: 'Kernziel des Vorhabens und Projektidee',
        type: 'markdown',
        exampleAnswer: `Wir entwicklen ein umweltfreundliches, *autonomes* Flugtaxi.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Passenger_Drone.jpg/800px-Passenger_Drone.jpg)`,
      },
      {
        title: 'Erläuterung des Bezugs des Vorhabens zum Förderaufruf ',
        type: 'markdown',
        exampleAnswer: `Wie im Förderaufruf gefordert, möchten wir ein neuartiges Fortbewegungsmittel für den Luftraum entwickeln.

Dazu ist Grundlagenforschung nötig, insbesondere:
- die autonome Steuerung eines Helikopters
- kooperative Verkehrssituationen im Luftraum
- sicherer Transport von Menschen
- Einsatzmöglichkeit von Wasserstoffantrieben für Helikopter `,
      },
      {
        title: 'Abgrenzung und Alleinstellungsmerkmal gegenüber inhaltlich ähnlich gelagerten UAS & Flugtaxis-Förderprojekten',
        type: 'markdown',
        exampleAnswer: `Andere Projekte und der aktuelle Stand der Technik fokussiert sich auf Diesel- und Elektromotoren mit Akkuspeicher.

Mit unserem Ansatz des Wasserstoffantriebs kann eine umweltfreundliche Alternative geschaffen werden.

--------

Hier ist eine Abgrenzung von der Nutzung von Wasserstoff für verschiedene Antriebsarten.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Einsatzbereiche_sauberen_Wasserstoff.png/800px-Einsatzbereiche_sauberen_Wasserstoff.png)`,
      },
    ],
  },
];

export default steps;
