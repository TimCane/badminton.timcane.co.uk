import React from 'react';
import { GameType } from '../types';

interface GameTypeStepProps {
  onSelect: (type: GameType) => void;
}

const GameTypeStep: React.FC<GameTypeStepProps> = ({ onSelect }) => {
  return (
    <div className="wizard-step">
      <h2>Select Game Type</h2>
      <div className="button-group">
        <button onClick={() => onSelect('Singles')}>Singles</button>
        <button onClick={() => onSelect('Doubles')}>Doubles</button>
      </div>
    </div>
  );
};

export default GameTypeStep;
