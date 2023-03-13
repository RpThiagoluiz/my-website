import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/globalStyles";
import {defaultTheme} from "../../styles/themes/default"

interface Props {
  children: React.ReactNode
}

export const ThemeProvider = ({children}: Props) => (
  <StyledThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    {children}
  </StyledThemeProvider>
)
