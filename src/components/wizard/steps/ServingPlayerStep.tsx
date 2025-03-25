import React from 'react';
import { ServingPlayer, GameType } from '../types';

interface ServingPlayerStepProps {
  onSelect: (player: ServingPlayer) => void;
  gameType: GameType;
}

const ServingPlayerStep: React.FC<ServingPlayerStepProps> = ({ onSelect, gameType }) => {
  return (
    <div className="wizard-step">
      <h2>Who Serves First?</h2>
      <div className="button-group">
        <button onClick={() => onSelect('You')}>You</button>
        {gameType === 'Doubles' && (
          <button onClick={() => onSelect('Teammate')}>Teammate</button>
        )}
      </div>
    </div>
  );
};

export default ServingPlayerStep;
