import styled from 'styled-components';

type Props = {
  size: number;
  filterNone?: boolean;
};

export const WrapperIcon = styled.img<Props>`
  width: ${({ size }) => `${size}svw`};
  height: ${({ size }) => `${size}svh`};
  background-color: transparent;
  filter: ${({ theme, filterNone }) =>
    filterNone
      ? 'none'
      : `drop-shadow(0 0.75rem 0.75rem ${theme.COLORS.HIGHLIGHT.PINK})`};



`;
