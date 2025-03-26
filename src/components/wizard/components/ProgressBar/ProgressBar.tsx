import React from 'react';
import { Container, Progress } from './ProgressBar.styles';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <Container>
      <Progress progress={progress} />
    </Container>
  );
};

export default ProgressBar;
