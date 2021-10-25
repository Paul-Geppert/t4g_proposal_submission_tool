import { Map } from 'immutable';
import GeneralStep from './components/GeneralStep';
import MarkdownStep from './components/MarkdownStep';

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
      component: MarkdownStep,
      properties: ['markdown'],
    },
  ],
]);
