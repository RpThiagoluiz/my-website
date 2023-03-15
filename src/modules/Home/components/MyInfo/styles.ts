import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  margin: 50px 0 ;
`;

export const WrapperFlexCenter = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  gap: 5px;
`;

export const WrapperDivider = styled.div`
display: flex;
flex:1;
align-items: center;
justify-content: center;
`;

export const Typing = styled.div`
  border-left: ${({ theme }) => `2px solid ${theme.COLORS.FONT_PRIMARY}`};
  height: 30px;
  animation: ${blinkAnimation} 1s infinite;
`;
