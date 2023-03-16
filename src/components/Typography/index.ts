import styled from 'styled-components';

type TypographyProps = {
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  color?: 'PRIMARY' | 'PRIMARY_REVERT';
  bold?: boolean;
};

type TypographyHighLight = {
  highLightColor: 'CIANO' | 'PINK';
};

export const Typography = styled.p<TypographyProps>`
  font-size: ${({ fontSize }) => `${fontSize}px` ?? `16px`};
  margin-top: ${({ marginTop }) => `${marginTop}px` ?? `0`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px` ?? `0`};
  margin-right: ${({ marginRight }) => `${marginRight}px` ?? `0`};
  margin-left: ${({ marginLeft }) => `${marginLeft}px` ?? `0`};
  color: ${({ theme, color }) =>
    color ? theme.COLORS.FONT[color] : 'inherit'} ;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')} ;
`;

export const TypographyHighLight = styled(Typography)<TypographyHighLight>`
  color: ${({ theme, highLightColor }) =>
    theme.COLORS.HIGHLIGHT[highLightColor]} ;
`;
