import React from 'react';
import { ServingPlayer } from '../../types';
import { useWizard } from '../../context/WizardContext';
import { Button, ButtonGroup, Container, Title } from './ServingPlayerStep.styles';
import { AnimatedRipple } from '../../../common/AnimatedRipple/AnimatedRipple';
import { useRippleAnimation } from '../../../../hooks/useRippleAnimation';
import { colors } from '../../../../theme/colors';

export const ServingPlayerStep: React.FC = () => {
  const { updateData, state, nextStep } = useWizard();
  const { ripple, startAnimation, handleAnimationComplete } = useRippleAnimation(nextStep);
  const isDoubles = state.data.gameType === 'Doubles';

  const handleSelect = (player: ServingPlayer, event: React.MouseEvent<HTMLButtonElement>) => {
    updateData('servingPlayer', player);
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    startAnimation(rect.left + rect.width / 2, rect.top + rect.height / 2, getButtonColor(player));
  };

  const getButtonColor = (player: ServingPlayer) => {
    switch(player) {
      case 'You': return colors.courtBlue;
      case 'Teammate': return colors.victorGreen;
      default: return colors.courtBlue;
    }
  };

  return (
    <Container>
      <Title>Who Serves First?</Title>
      <ButtonGroup>
        <Button 
          onClick={(e) => handleSelect('You', e)}
          $color={getButtonColor('You')}
        >
          You
        </Button>
        {isDoubles && (
          <Button 
            onClick={(e) => handleSelect('Teammate', e)}
            $color={getButtonColor('Teammate')}
          >
            Teammate
          </Button>
        )}
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
