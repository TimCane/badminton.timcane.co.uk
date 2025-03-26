import React, { useState, useEffect } from 'react';
import { WizardProvider } from './components/wizard/context/WizardContext';
import GameSetupWizard from './components/wizard/GameSetupWizard';
import LoadingSplash from './components/common/LoadingSplash/LoadingSplash';
import { GameSetupData } from './components/wizard/types';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const handleGameSetup = (data: GameSetupData) => {
    console.log('Game setup complete:', data);
  };

  if (isLoading) {
    return <LoadingSplash text="Setting up the court..." />;
  }

  return (
    <div className="App">
      <WizardProvider>
        <GameSetupWizard onComplete={handleGameSetup} />
      </WizardProvider>
    </div>
  );
}

export default App;
