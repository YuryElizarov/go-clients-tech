import {ButtonTheme, EButtonVariants} from "./types";
import {lightColors} from "../../theme/colors";


export const buttonTheme: ButtonTheme = {
    [EButtonVariants.Default]: {
        background: lightColors.green,
        backgroundHover: lightColors.greenHover,
        color: lightColors.white,
        colorHover: lightColors.green,
        border: 'none',
        borderHover: 'none',
    },
    [EButtonVariants.Red]: {
        background: lightColors.redHover,
        backgroundHover: lightColors.red,
        color: lightColors.red,
        colorHover: lightColors.white,
        border: 'none',
        borderHover: 'none',
    },
    [EButtonVariants.Gray]: {
        background: lightColors.borderInputDefault,
        backgroundHover: lightColors.black,
        color: lightColors.black,
        colorHover: lightColors.white,
        border: 'none',
        borderHover: 'none',
    },
    [EButtonVariants.Text]: {
        background: 'none',
        backgroundHover: lightColors.borderInputDefault,
        color: lightColors.gray,
        colorHover: lightColors.green,
        border: 'none',
        borderHover: 'none',
    },
    [EButtonVariants.Border]: {
        background: 'none',
        backgroundHover: lightColors.green,
        color: lightColors.green,
        colorHover: lightColors.white,
        border: `1px solid ${lightColors.green}`,
        borderHover: `1px solid ${lightColors.green}`,
    },
    [EButtonVariants.White]: {
        background: lightColors.white,
        backgroundHover: lightColors.greenHover,
        color: lightColors.green,
        colorHover: lightColors.black,
        border: 'none',
        borderHover: 'none',
    },
};