import {Colors, Breakpoints, MediaQueries, Shadows} from "./types";
import {ButtonTheme} from "../UI/Button/types";

export interface GoClientsTechTheme {
    colors: Colors;
    breakpoints: Breakpoints;
    mediaQueries: MediaQueries;
    shadows: Shadows;
    buttons: ButtonTheme;
}

export { default as theme } from "./theme";

export { lightColors } from "./colors";