import styled from 'styled-components';
import { colors } from '../../../../theme/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

interface ButtonProps {
  $color: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.$color};
  color: white;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
