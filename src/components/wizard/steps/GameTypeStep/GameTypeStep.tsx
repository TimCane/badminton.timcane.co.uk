import React from 'react';
import { GameType } from '../../types';
import { useWizard } from '../../context/WizardContext';
import { Button, ButtonGroup, Container, Title } from './GameTypeStep.styles';

export const GameTypeStep: React.FC = () => {
  const { updateData } = useWizard();

  const handleSelect = (type: GameType) => {
    updateData('gameType', type);
  };

  return (
    <Container>
      <Title>Select Game Type</Title>
      <ButtonGroup>
        <Button onClick={() => handleSelect('Singles')}>Singles</Button>
        <Button onClick={() => handleSelect('Doubles')}>Doubles</Button>
      </ButtonGroup>
    </Container>
  );
};
