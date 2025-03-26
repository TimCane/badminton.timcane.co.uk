import React from 'react';
import { GameType } from '../../types';
import { useWizard } from '../../context/WizardContext';
import { Button, ButtonGroup, Container, Title } from './GameTypeStep.styles';
import { AnimatedRipple } from '../../../common/AnimatedRipple/AnimatedRipple';
import { useRippleAnimation } from '../../../../hooks/useRippleAnimation';
import { colors } from '../../../../theme/colors';

export const GameTypeStep: React.FC = () => {
  const { updateData, nextStep } = useWizard();
  const { ripple, startAnimation, handleAnimationComplete } = useRippleAnimation(nextStep);

  const handleSelect = (type: GameType, event: React.MouseEvent<HTMLButtonElement>) => {
    updateData('gameType', type);
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    startAnimation(rect.left + rect.width / 2, rect.top + rect.height / 2, getButtonColor(type));
    nextStep();
  };

  const getButtonColor = (type: GameType) => {
    return type === 'Singles' ? colors.courtBlue : colors.yonexRed;
  };

  return (
    <Container>
      <Title>Select Game Type</Title>
      <ButtonGroup>
        <Button 
          onClick={(e) => handleSelect('Singles', e)}
          $color={getButtonColor('Singles')}
        >
          Singles
        </Button>
        <Button 
          onClick={(e) => handleSelect('Doubles', e)}
          $color={getButtonColor('Doubles')}
        >
          Doubles
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
