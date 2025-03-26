import React from 'react';
import { SetCount } from '../../types';
import { useWizard } from '../../context/WizardContext';
import { Container, Title, ButtonGroup, Button } from './SetCountStep.styles';

export const SetCountStep: React.FC = () => {
  const { updateData } = useWizard();
  const options: SetCount[] = [1, 3, 5, 'Endless'];

  const handleSelect = (count: SetCount) => {
    updateData('setCount', count);
  };

  return (
    <Container>
      <Title>Number of Sets</Title>
      <ButtonGroup>
        {options.map((count) => (
          <Button key={count} onClick={() => handleSelect(count)}>
            {count}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
};
