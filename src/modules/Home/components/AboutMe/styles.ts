import styled from 'styled-components';
import { Typography } from '../../../../components/Typography';
import { spin } from '../../../../layout/Animations/spin';
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
 font-size: 2rem;
  background-image:${({ theme }) =>
    `linear-gradient(58deg,${theme.COLORS.BACKGROUND.PRIMARY},${theme.COLORS.HIGHLIGHT.PINK} )`};

    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    z-index: 9;


`;

export const IconsWrapper = styled.div`
display: flex;
gap: 2rem;
position: absolute;
top: -10vh;
left: 8vw;
animation: ${spin} 50s infinite ease-in-out;
`;

export const TextBox = styled(ContainerGlass)`
width: 30svw;

`;
