import { DefaultTheme } from "styled-components";
import {breakpoints, mediaQueries, shadows} from "./base";
import { lightColors } from "./colors";
import {buttonTheme} from "../UI/Button/theme";

const theme: DefaultTheme = {
    colors: lightColors,
    breakpoints,
    mediaQueries,
    shadows,
    buttons: buttonTheme,
};

export default theme;