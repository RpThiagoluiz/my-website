import { keyframes } from 'styled-components';

export const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(-20px);
  }
  75%{
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;
