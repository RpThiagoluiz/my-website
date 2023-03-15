import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
  margin: 0;
    padding:0;
    box-sizing: 'border-box';
    font-family: 'Roboto', sans-serif;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: ${({ theme }) =>
      `inset 0 0 5px${theme.COLORS.BACKGROUND_PRIMARY}`};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT_PINK};
    border-radius: 5px;
  }
  }

`;
