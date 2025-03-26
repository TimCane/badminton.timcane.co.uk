import React, { useState, useEffect } from 'react';
import { Container, Shuttlecock, LoadingText } from './LoadingSplash.styles';

const loadingMessages = [
  "Setting up the court",
  "Stringing the rackets",
  "Sorting the shuttlecocks",
  "Drawing the lines",
  "Checking the net height",
  "Warming up",
  "Preparing the scoreboard",
  "Getting ready to serve",
];

const dots = [" ", "."];

interface LoadingSplashProps {
  text?: string;
}

const LoadingSplash: React.FC<LoadingSplashProps> = () => {
  const [currentText, setCurrentText] = useState(loadingMessages[0]);
  const [currentDots, setCurrentDots] = useState(dots[0]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = loadingMessages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 900);

    return () => clearInterval(messageInterval);
  }, []);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setCurrentDots(prev => {
        const currentIndex = dots.indexOf(prev);
        const nextIndex = (currentIndex + 1) % dots.length;
        return dots[nextIndex];
      });
    }, 450);

    return () => clearInterval(dotsInterval);
  }, []);

  return (
    <Container>
      <Shuttlecock>🏸</Shuttlecock>
      <LoadingText>{currentText}{currentDots}</LoadingText>
    </Container>
  );
};

export default LoadingSplash;
