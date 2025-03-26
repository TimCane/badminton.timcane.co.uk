import React from 'react';
import { StartingPlayer } from '../../types';
import { useWizard } from '../../context/WizardContext';
import { Container, Title, ButtonGroup, Button } from './StartingPlayerStep.styles';

export const StartingPlayerStep: React.FC = () => {
  const { updateData } = useWizard();

  const handleSelect = (player: StartingPlayer) => {
    updateData('startingPlayer', player);
  };

  return (
    <Container>
      <Title>Who Starts?</Title>
      <ButtonGroup>
        <Button onClick={() => handleSelect('You')}>You</Button>
        <Button onClick={() => handleSelect('Opponent')}>Opponent</Button>
      </ButtonGroup>
    </Container>
  );
};
