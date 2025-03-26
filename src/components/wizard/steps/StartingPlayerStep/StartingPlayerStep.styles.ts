import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin: 0;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
`;

export const Button = styled.button`
  padding: 1.5rem 3rem;
  font-size: 2rem;
  border: none;
  border-radius: 12px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  min-width: 200px;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
