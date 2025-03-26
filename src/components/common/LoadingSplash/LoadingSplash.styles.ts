import styled, { keyframes } from 'styled-components';
import { colors } from '../../../theme/colors';

const generateKeyframes = () => {
  let frames = '';
  for (let i = 0; i <= 100; i++) {
    const xPos = -150 + (i * 3); // Move from -150 to 150

    // Create a more dramatic parabolic arc
    const normalizedI = i / 100; // 0 to 1
    const parabola = -4 * Math.pow(normalizedI - 0.5, 2) + 1; // Parabolic curve
    const yPos = -150 * parabola + 50; // Scale and offset the parabola

    // Faster rotation at the peak
    const rotationSpeed = parabola * 1.5 + 0.5; // Speed up in the middle
    const rotation = i * 3.6 * rotationSpeed;

    // Smoother opacity transitions
    const opacity = i <= 10 ? i / 10 : // Fade in
      i >= 90 ? (100 - i) / 10 : // Fade out
        1; // Full opacity in between
    frames += `
  ${i}% {
    transform: translate(${xPos}%, ${yPos}%) rotate(${rotation}deg);
    opacity: ${opacity};
  }`;
  }
  return frames;
};

const shuttlecockFlight = keyframes`${generateKeyframes()}`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(5px);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-5px);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
  z-index: 9999;
  perspective: 1000px;
`;

export const Shuttlecock = styled.div`
  font-size: 4rem;
  margin-bottom: 2rem;
  animation: ${shuttlecockFlight} 2s cubic-bezier(0.76, 0, 0.24, 1) infinite;
  transform-origin: center;
  will-change: transform, opacity;
`;

export const LoadingText = styled.div`
  font-size: 1.5rem;
  color: ${colors.courtBlue};
  font-weight: 500;
  letter-spacing: 0.1em;
  min-height: 2em;
  min-width: 20ch;
  text-align: center;
  animation: ${fadeInOut} 0.3s ease-in-out;
  will-change: transform, opacity;
`;
