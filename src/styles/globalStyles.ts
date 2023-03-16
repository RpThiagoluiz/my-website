import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Sono:wght@400;500;700&display=swap');

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
