import { GameTypeStep } from '../steps/GameTypeStep';
import { SetCountStep } from '../steps/SetCountStep';
import { StartingPlayerStep } from '../steps/StartingPlayerStep';
import { ServingPlayerStep } from '../steps/ServingPlayerStep';

export const steps = [
  {
    id: 'gameType',
    component: GameTypeStep,
    title: 'Select Game Type'
  },
  {
    id: 'setCount',
    component: SetCountStep,
    title: 'Number of Sets'
  },
  {
    id: 'startingPlayer',
    component: StartingPlayerStep,
    title: 'Who Starts?'
  },
  {
    id: 'servingPlayer',
    component: ServingPlayerStep,
    title: 'Who Serves First?'
  }
] as const;

export type StepId = typeof steps[number]['id'];
