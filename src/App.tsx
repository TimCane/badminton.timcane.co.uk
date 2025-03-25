import React from 'react';
import GameSetupWizard from './components/wizard/GameSetupWizard';
import { GameSetupData } from './components/wizard/types';
import './App.css';

function App() {
  const handleGameSetup = (gameData: GameSetupData) => {
    console.log('Game setup complete:', gameData);
    // We'll implement the game screen later
  };

  return (
    <div className="App">
      <GameSetupWizard onComplete={handleGameSetup} />
    </div>
  );
}

export default App;
