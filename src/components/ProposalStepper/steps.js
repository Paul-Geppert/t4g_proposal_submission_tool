import { Map } from 'immutable';
import CoreDataStep from './components/CoreDataStep';
import MarkdownStep from './components/MarkdownStep';

export const isComplete = (validated) => (properties) =>
  properties.every((prop) => validated[prop]);

export default Map([
  [
    'Administrative Daten',
    {
      component: CoreDataStep,
      properties: [],
    },
  ],
  [
    'General Information 2',
    {
      component: MarkdownStep,
      properties: ['markdown'],
    },
  ],
]);
