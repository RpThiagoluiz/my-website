import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding:0;
    box-sizing: 'border-box';
    font-family: 'Sono', sans-serif;



  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: ${({ theme }) =>
      `inset 0 0 5px${theme.COLORS.BACKGROUND.PRIMARY}`};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT.PINK};
    border-radius: 5px;
  }
  }

  a {
    all: unset;
}

`;
