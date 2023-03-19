import styled from 'styled-components';

type WrapperFlexProps = {
  flexDirection?: React.CSSProperties['flexDirection'];
  alignItems?: React.CSSProperties['alignItems'];
  gap?: number;
};

export const WrapperFlex = styled.div<WrapperFlexProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
  margin: 15px 0;
  gap: ${({ gap }) => `${gap}px` ?? '5px'};
`;
