import { Map } from 'immutable';
import ContentStep from './components/ContentStep';
import CoreDataStep from './components/CoreDataStep';

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
    'Complex content',
    {
      component: ContentStep,
      properties: [],
    },
  ],
]);
