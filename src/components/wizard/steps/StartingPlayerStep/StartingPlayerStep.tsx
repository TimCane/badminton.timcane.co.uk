import React from 'react';
import { StartingPlayer } from '../../types';
import { useWizard } from '../../context/WizardContext';
import { Button, ButtonGroup, Container, Title } from './StartingPlayerStep.styles';
import { AnimatedRipple } from '../../../common/AnimatedRipple/AnimatedRipple';
import { useRippleAnimation } from '../../../../hooks/useRippleAnimation';
import { colors } from '../../../../theme/colors';

export const StartingPlayerStep: React.FC = () => {
  const { updateData, nextStep } = useWizard();
  const { ripple, startAnimation, handleAnimationComplete } = useRippleAnimation(nextStep);

  const handleSelect = (player: StartingPlayer, event: React.MouseEvent<HTMLButtonElement>) => {
    updateData('startingPlayer', player);
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    startAnimation(rect.left + rect.width / 2, rect.top + rect.height / 2, getButtonColor(player));
  };

  const getButtonColor = (player: StartingPlayer) => {
    return player === 'You' ? colors.courtBlue : colors.yonexRed;
  };

  return (
    <Container>
      <Title>Who Starts?</Title>
      <ButtonGroup>
        <Button 
          onClick={(e) => handleSelect('You', e)}
          $color={getButtonColor('You')}
        >
          You
        </Button>
        <Button 
          onClick={(e) => handleSelect('Opponent', e)}
          $color={getButtonColor('Opponent')}
        >
          Opponent
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
