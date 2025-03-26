import React from 'react';
import { StartingSide } from '../../types';
import { useWizard } from '../../context/WizardContext';
import { AnimatedRipple } from '../../../common/AnimatedRipple/AnimatedRipple';
import { useRippleAnimation } from '../../../../hooks/useRippleAnimation';
import { colors } from '../../../../theme/colors';
import { Container, Title, ButtonGroup, Button } from './StartingSideStep.styles';

export const StartingSideStep: React.FC = () => {
  const { updateData, nextStep } = useWizard();
  const { ripple, startAnimation, handleAnimationComplete } = useRippleAnimation(nextStep);

  const handleSelect = (side: StartingSide, event: React.MouseEvent<HTMLButtonElement>) => {
    updateData('startingSide', side);
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    startAnimation(rect.left + rect.width / 2, rect.top + rect.height / 2, getButtonColor(side));
  };

  const getButtonColor = (side: StartingSide) => {
    return side === 'Left' ? colors.courtBlue : colors.yonexRed;
  };

  return (
    <Container>
      <Title>Starting Side</Title>
      <ButtonGroup>
        <Button
          onClick={(e) => handleSelect('Left', e)}
          $color={getButtonColor('Left')}
        >
          Left
        </Button>
        <Button
          onClick={(e) => handleSelect('Right', e)}
          $color={getButtonColor('Right')}
        >
          Right
        </Button>
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
