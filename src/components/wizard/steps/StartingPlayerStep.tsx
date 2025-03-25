import React from 'react';
import { StartingPlayer } from '../types';

interface StartingPlayerStepProps {
  onSelect: (player: StartingPlayer) => void;
}

const StartingPlayerStep: React.FC<StartingPlayerStepProps> = ({ onSelect }) => {
  return (
    <div className="wizard-step">
      <h2>Who Starts?</h2>
      <div className="button-group">
        <button onClick={() => onSelect('You')}>You</button>
        <button onClick={() => onSelect('Opponent')}>Opponent</button>
      </div>
    </div>
  );
};

export default StartingPlayerStep;
