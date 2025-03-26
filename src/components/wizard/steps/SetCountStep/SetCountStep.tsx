import React from 'react';
import { SetCount } from '../../types';
import { useWizard } from '../../context/WizardContext';
import { Button, ButtonGroup, Container, Title } from './SetCountStep.styles';
import { AnimatedRipple } from '../../../common/AnimatedRipple/AnimatedRipple';
import { useRippleAnimation } from '../../../../hooks/useRippleAnimation';
import { colors } from '../../../../theme/colors';

export const SetCountStep: React.FC = () => {
  const { updateData, nextStep } = useWizard();
  const { ripple, startAnimation, handleAnimationComplete } = useRippleAnimation(nextStep);
  const options: SetCount[] = [1, 3, 5, 'Endless'];

  const handleSelect = (count: SetCount, event: React.MouseEvent<HTMLButtonElement>) => {
    updateData('setCount', count);
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    startAnimation(rect.left + rect.width / 2, rect.top + rect.height / 2, getButtonColor(count));
  };

  const getButtonColor = (count: SetCount) => {
    return count === 'Endless' ? colors.liNingGold : colors.courtBlue;
  };

  return (
    <Container>
      <Title>Number of Sets</Title>
      <ButtonGroup>
        {options.map((count) => (
          <Button
            key={count}
            onClick={(e) => handleSelect(count, e)}
            $color={getButtonColor(count)}
          >
            {count}
          </Button>
        ))}
      </ButtonGroup>
      {ripple && (
        <AnimatedRipple
          x={ripple.x}
          y={ripple.y}
          color={ripple.color}
          onAnimationComplete={handleAnimationComplete}
        />
      )}
    </Container>
  );
};
