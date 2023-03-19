import styled from 'styled-components';

export const ContainerPage = styled.div`
 min-height: 100svh;

 overflow-x: hidden;
  color: ${({ theme }) => theme.COLORS.FONT.PRIMARY};
  background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT.CIANO};
`;
