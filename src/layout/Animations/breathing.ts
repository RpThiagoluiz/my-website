import { keyframes } from 'styled-components';

export const breathing = keyframes`
  0% {
    transform: scale(0.2);
  }
 25% {
    transform: scale(0.4);
  }
  50% {
    transform: scale(0.6);
  }
  75% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
`;
