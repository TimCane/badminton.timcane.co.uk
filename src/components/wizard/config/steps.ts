import { GameTypeStep } from '../steps/GameTypeStep';
import { SetCountStep } from '../steps/SetCountStep';
import { StartingPlayerStep } from '../steps/StartingPlayerStep';

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
  }
] as const;

export type StepId = typeof steps[number]['id'];
