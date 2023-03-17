import styled from 'styled-components';

export const ContainerPage = styled.div`
  min-height: calc(100vh);
  color: ${({ theme }) => theme.COLORS.FONT.PRIMARY};
  background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT.CIANO};
`;
