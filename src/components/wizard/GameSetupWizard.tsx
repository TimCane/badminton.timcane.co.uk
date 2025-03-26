import React, { useEffect } from 'react';
import { GameSetupData } from './types';
import { WizardProvider, useWizard } from './context/WizardContext';
import { steps } from './config/steps';
import ProgressBar from './components/ProgressBar';
import { Container } from './GameSetupWizard.styles';

interface GameSetupWizardProps {
  onComplete: (data: GameSetupData) => void;
}

const WizardContent: React.FC<{ onComplete: (data: GameSetupData) => void }> = ({ onComplete }) => {
  const { state, isComplete } = useWizard();
  const CurrentStep = steps[state.currentStep]?.component;

  useEffect(() => {
    if (isComplete) {
      onComplete(state.data as GameSetupData);
    }
  }, [isComplete, state.data, onComplete]);

  return (
    <Container>
      <ProgressBar currentStep={state.currentStep} totalSteps={steps.length} />
      {CurrentStep && <CurrentStep />}
    </Container>
  );
};

const GameSetupWizard: React.FC<GameSetupWizardProps> = ({ onComplete }) => {
  return (
    <WizardProvider>
      <WizardContent onComplete={onComplete} />
    </WizardProvider>
  );
};

export default GameSetupWizard;
