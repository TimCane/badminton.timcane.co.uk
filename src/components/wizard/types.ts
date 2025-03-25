export type GameType = 'Singles' | 'Doubles';
export type SetCount = 1 | 3 | 5 | 'Endless';
export type StartingPlayer = 'You' | 'Opponent';
export type ServingPlayer = 'You' | 'Teammate';

export interface GameSetupData {
  gameType: GameType;
  setCount: SetCount;
  startingPlayer: StartingPlayer;
  servingPlayer: ServingPlayer;
}
