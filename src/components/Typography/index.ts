import styled from 'styled-components';

type TypographyProps = {
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  color?: 'PRIMARY' | 'PRIMARY_REVERT' | 'BLACK';
  bold?: boolean;
};

type TypographyHighLightProps = Omit<TypographyProps, 'color'> & {
  highLightColor: 'CIANO' | 'PINK';
};

export const Typography = styled.p.attrs({
  role: 'typography', // pass role for jest
})<TypographyProps>`
  font-size:${({ fontSize }) => `${fontSize}px` ?? `16px`};
  margin-top: ${({ marginTop }) => `${marginTop}px` ?? `0`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px` ?? `0`};
  margin-right: ${({ marginRight }) => `${marginRight}px` ?? `0`};
  margin-left: ${({ marginLeft }) => `${marginLeft}px` ?? `0`};
  color: ${({ theme, color }) =>
    color ? theme.COLORS.FONT[color] : 'inherit'} ;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')} ;

`;

export const TypographyHighLight = styled(Typography).attrs({
  'data-testid': 'typographyHighLight', // pass id for jest
})<TypographyHighLightProps>`
  color: ${({ theme, highLightColor }) =>
    theme.COLORS.HIGHLIGHT[highLightColor]} ;
`;
