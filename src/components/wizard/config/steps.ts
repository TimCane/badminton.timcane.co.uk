import { GameTypeStep } from "../steps/GameTypeStep";
import { SetCountStep } from "../steps/SetCountStep";
import { StartingSideStep } from "../steps/StartingSideStep";

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
    id: 'startingSide',
    component: StartingSideStep,
    title: 'Starting Side'
  }
] as const;

export type StepId = typeof steps[number]['id'];
