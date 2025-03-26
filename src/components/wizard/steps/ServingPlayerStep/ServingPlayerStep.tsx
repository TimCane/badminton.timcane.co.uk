import React from 'react';
import { ServingPlayer } from '../../types';
import { useWizard } from '../../context/WizardContext';
import { Button, ButtonGroup, Container, Title } from './ServingPlayerStep.styles';

export const ServingPlayerStep: React.FC = () => {
  const { updateData, state } = useWizard();
  const isDoubles = state.data.gameType === 'Doubles';

  const handleSelect = (player: ServingPlayer) => {
    updateData('servingPlayer', player);
  };

  return (
    <Container>
      <Title>Who Serves First?</Title>
      <ButtonGroup>
        <Button onClick={() => handleSelect('You')}>You</Button>
        {isDoubles && (
          <Button onClick={() => handleSelect('Teammate')}>Teammate</Button>
        )}
      </ButtonGroup>
    </Container>
  );
};
