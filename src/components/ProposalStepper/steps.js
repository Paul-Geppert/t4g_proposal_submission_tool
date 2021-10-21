import { Map } from 'immutable';
import GeneralStep from './components/GeneralStep';

export const isComplete = (validated) => (properties) =>
  properties.every((prop) => validated[prop]);

export default Map([
  [
    'General Information',
    {
      component: GeneralStep,
      properties: ['name'],
    },
  ],
  [
    'General Information 2',
    {
      component: GeneralStep,
      properties: ['name'],
    },
  ],
]);
