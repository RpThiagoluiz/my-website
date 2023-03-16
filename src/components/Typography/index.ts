import styled from 'styled-components';

type TypographyProps = {
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
};

type TypographyHighLight = {
  highLightColor: 'CIANO' | 'PINK';
};

export const Typography = styled.p<TypographyProps>`
  font-size: ${({ fontSize }) => `${fontSize}px` ?? `16px`};
  margin-top: ${({ marginTop }) => `${marginTop}px` ?? `0`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px` ?? `0`};
`;

export const TypographyHighLight = styled(Typography)<TypographyHighLight>`
  color: ${({ theme, highLightColor }) =>
    theme.COLORS.HIGHLIGHT[highLightColor]} ;
`;
