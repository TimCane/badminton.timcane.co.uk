export type GameType = 'Singles' | 'Doubles';
export type SetCount = 1 | 3 | 5 | 'Endless';
export type StartingPlayer = 'You' | 'Opponent';

export interface GameSetupData {
  gameType: GameType;
  setCount: SetCount;
  startingPlayer: StartingPlayer;
}
