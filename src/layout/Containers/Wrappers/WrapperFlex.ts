import styled from 'styled-components';

type WrapperFlexProps = {
  flexDirection?: React.CSSProperties['flexDirection'];
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  gap?: number;
};

export const WrapperFlex = styled.div<WrapperFlexProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  margin-top: ${({ marginTop }) => `${marginTop}px` ?? `15px`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px` ?? `15px`};
  margin-right: ${({ marginRight }) => `${marginRight}px` ?? `0`};
  margin-left: ${({ marginLeft }) => `${marginLeft}px` ?? `0`};

  gap: ${({ gap }) => `${gap}px` ?? '5px'};
`;
