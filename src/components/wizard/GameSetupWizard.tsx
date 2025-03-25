import React, { useState } from 'react';
import { GameSetupData } from './types';
import GameTypeStep from './steps/GameTypeStep';
import SetCountStep from './steps/SetCountStep';
import StartingPlayerStep from './steps/StartingPlayerStep';
import ServingPlayerStep from './steps/ServingPlayerStep';
import './GameSetupWizard.css';

interface GameSetupWizardProps {
  onComplete: (data: GameSetupData) => void;
}

const GameSetupWizard: React.FC<GameSetupWizardProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [gameData, setGameData] = useState<Partial<GameSetupData>>({});

  const updateGameData = <K extends keyof GameSetupData>(key: K, value: GameSetupData[K]) => {
    setGameData(prev => ({ ...prev, [key]: value }));
    setStep(prev => prev + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <GameTypeStep onSelect={(type) => updateGameData('gameType', type)} />;
      case 1:
        return <SetCountStep onSelect={(count) => updateGameData('setCount', count)} />;
      case 2:
        return <StartingPlayerStep onSelect={(player) => updateGameData('startingPlayer', player)} />;
      case 3:
        return (
          <ServingPlayerStep 
            gameType={gameData.gameType!}
            onSelect={(player) => updateGameData('servingPlayer', player)} 
          />
        );
      default:
        return null;
    }
  };

  if (step === 4) {
    onComplete(gameData as GameSetupData);
  }

  return (
    <div className="game-setup-wizard">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${(step / 4) * 100}%` }} />
      </div>
      {renderStep()}
    </div>
  );
};

export default GameSetupWizard;
