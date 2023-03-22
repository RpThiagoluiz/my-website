import styled from 'styled-components';
import { Typography } from '../../../../components/Typography';
import { bounce } from '../../../../layout/Animations/bounce';
import { ContainerGlass } from '../../../../layout/Containers/ContainerGlass';

export const Container = styled.div`
height: 60svh;
background: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
padding: 80px 150px ;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Title = styled(Typography)`
 font-size: 2.5rem;
 font-weight: bold;
  background-image:${({ theme }) =>
    `linear-gradient(25deg,${theme.COLORS.HIGHLIGHT.PINK},${theme.COLORS.HIGHLIGHT.CIANO} )`};

    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    z-index: 9;
`;

export const TextBox = styled(ContainerGlass)`
width: 30svw;

`;

export const Image = styled.img`
position: absolute;
top: 10svh;
left: 10svw;
width: 45rem;
filter: ${({ theme }) =>
  `drop-shadow(0 0 0.3rem ${theme.COLORS.HIGHLIGHT.PINK})`};

animation: ${bounce} 5s infinite ease-in-out;
`;
