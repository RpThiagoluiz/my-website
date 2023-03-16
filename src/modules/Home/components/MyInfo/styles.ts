import styled from 'styled-components';
import { blink } from '../../../../layout/Animations/blink';
import { bounce } from '../../../../layout/Animations/bounce';

export const Wrapper = styled.div`
  margin: 50px 0 ;
`;

export const WrapperDescriptionAndImage = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 30rem;

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
  animation: ${blink} 1s infinite;
`;

export const Square = styled.div`
  width: 12rem;
  height: 20rem;
  position: relative;
  transform: rotate(45deg);
  animation: ${bounce} 2s ease-in-out infinite;
  background: ${({ theme }) => theme.COLORS.HIGHLIGHT_CIANO};
  border-radius: 14px;

`;

export const Image = styled.img`
  width: 20rem;
  background-color: transparent;
  filter: ${({ theme }) =>
    `drop-shadow(0 0.75rem 0.75rem ${theme.COLORS.HIGHLIGHT_CIANO})`};
`;
