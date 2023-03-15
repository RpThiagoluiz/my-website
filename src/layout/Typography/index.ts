import styled from 'styled-components';

type TypographyProps = {
  fontSize?: number;
  marginTop?: number;
};

export const Typography = styled.p<TypographyProps>`
  font-size: ${({ fontSize }) => `${fontSize}px` ?? `16px`};
  margin-top: ${({ marginTop }) => `${marginTop}px` ?? `0`};
`;

export const TypographyHighLight = styled(Typography)`
  color: ${({ theme }) => theme.COLORS.HIGHLIGHT_PINK};
`;
