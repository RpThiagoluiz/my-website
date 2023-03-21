import styled from 'styled-components';
import { hexToRGB } from '../../../helpers/switchColorCodes';

type Props = {
  width?: number;
  height?: number;
};

export const ContainerGlass = styled.div<Props>`
background: rgba( 255, 255, 255, 0.3 );
box-shadow: ${({ theme }) => `0 4px 8px 0${theme.COLORS.HIGHLIGHT.PINK}`};
backdrop-filter: blur( 6.5px );
-webkit-backdrop-filter: blur( 6.5px );
border-radius: 10px;
border: ${({ theme }) =>
  `1px solid ${hexToRGB(theme.COLORS.HIGHLIGHT.PINK, 0.15)}`} ;
padding: 30px 50px;
width: ${({ width }) => (width ? `${width}svw` : 'auto')};
height: ${({ height }) => (height ? `${height}svh` : 'auto')};

`;
