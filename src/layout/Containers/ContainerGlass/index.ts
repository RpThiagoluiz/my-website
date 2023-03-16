import styled from 'styled-components';

type Props = {
  width?: number;
  height?: number;
};

export const ContainerGlass = styled.div<Props>`
background: rgba( 255, 255, 255, 0.3 );
box-shadow: ${({ theme }) => `0 4px 16px 0${theme.COLORS.BACKGROUND.PRIMARY}`};
backdrop-filter: blur( 6.5px );
-webkit-backdrop-filter: blur( 6.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.15);
padding: 30px 50px;
width: ${({ width }) => (width ? `${width}px` : 'auto')};
height: ${({ height }) => (height ? `${height}px` : 'auto')};

`;
