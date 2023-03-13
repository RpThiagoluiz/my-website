import "styled-components";
import { type themeType } from "../../styles/themes/themeTypes";

declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
