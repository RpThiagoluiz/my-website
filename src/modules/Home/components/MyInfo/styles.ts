import styled from 'styled-components';
import { blink } from '../../../../layout/Animations/blink';

import { CloudArrowDown, LinkedinLogo, GithubLogo } from 'phosphor-react';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
`;

export const Wrapper = styled.div`
  padding: 50px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.PRIMARY};
  min-height: 70svh;
  border-radius: 0px 0px 250px 0px;
`;

export const WrapperDescriptionAndImage = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: clamp(2rem, 1rem + 20vw, 30rem);
margin-bottom: 150px;


@media (max-width: 1024px) {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;

}

`;

export const WrapperDivider = styled.div`
display: flex;
flex:1;
align-items: center;
justify-content: center;
`;

export const Typing = styled.div`
  border-left: ${({ theme }) => `2px solid ${theme.COLORS.FONT.PRIMARY}`};
  height: 30px;
  animation: ${blink} 1s infinite;
`;

export const GeometricWrapper = styled.div`
  width: 320px;
  height: 300px;
  border-radius: 20rem 30rem  25rem 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  background: ${({ theme }) => theme.COLORS.HIGHLIGHT.CIANO};



`;

export const Image = styled.img`
  width: 320px;
  background-color: transparent;
  filter: ${({ theme }) =>
    `drop-shadow(0 0.75rem 0.75rem ${theme.COLORS.HIGHLIGHT.CIANO})`};

  position: absolute;
  top: 0px;

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
