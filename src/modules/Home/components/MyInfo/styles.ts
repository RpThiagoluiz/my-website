import styled from 'styled-components';
import { blink } from '../../../../layout/Animations/blink';
import { bounce } from '../../../../layout/Animations/bounce';
import { CloudArrowDown, LinkedinLogo, GithubLogo } from 'phosphor-react';

type WrapperFlexProps = {
  flexDirection?: React.CSSProperties['flexDirection'];
  alignItems?: React.CSSProperties['alignItems'];
  gap?: number;
};

export const Wrapper = styled.div`
 padding: 50px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
`;

export const WrapperDescriptionAndImage = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 30rem;

`;

export const WrapperFlex = styled.div<WrapperFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
  margin: 15px 0;
  gap: ${({ gap }) => `${gap}px` ?? '5px'};

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
  background: ${({ theme }) => theme.COLORS.HIGHLIGHT.CIANO};
  border-radius: 14px;

`;

export const Image = styled.img`
  width: 20rem;
  background-color: transparent;
  filter: ${({ theme }) =>
    `drop-shadow(0 0.75rem 0.75rem ${theme.COLORS.HIGHLIGHT.CIANO})`};
`;

export const GithubIcon = styled(GithubLogo).attrs({
  size: 32,
})`
  background-color: transparent;
  filter: ${({ theme }) =>
    `drop-shadow(0 0 0.3rem ${theme.COLORS.HIGHLIGHT.PINK})`};
    transition: all 500ms ease-in-out;

    &:hover{
      filter: ${({ theme }) =>
        `drop-shadow(0 0.4rem 0.9rem ${theme.COLORS.HIGHLIGHT.PINK})`};
    }
`;

export const LinkedInIcon = styled(LinkedinLogo).attrs({
  size: 32,
})`
 background-color: transparent;
  filter: ${({ theme }) =>
    `drop-shadow(0 0 0.3rem ${theme.COLORS.HIGHLIGHT.PINK})`};
    transition: all 500ms ease-in-out;

    &:hover{
      filter: ${({ theme }) =>
        `drop-shadow(0 0.4rem 0.9rem ${theme.COLORS.HIGHLIGHT.PINK})`};
    }
`;

export const DownloadIcon = styled(CloudArrowDown).attrs({
  size: 32,
})`
  background-color: transparent;

  filter: ${({ theme }) =>
    `drop-shadow(0 0 0.3rem ${theme.COLORS.INFO.SUCCESS})`};

`;
