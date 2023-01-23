import {AnchorHTMLAttributes, ButtonHTMLAttributes} from "react";
import Link, {LinkProps} from "react-router-dom";

export enum EButtonVariants {
    Default,
    Gray,
    Text,
    Red,
    Border,
    White,
}

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement> | LinkProps | any;

export type ButtonProps = {
    variant: EButtonVariants;
    fullWidth?: boolean;
    as?: "a" | "button" | typeof Link;
    href?: string;
    external?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
} & ButtonTypes;

export type ButtonThemeVariant = {
    background: string;
    backgroundHover: string;
    color: string;
    colorHover: string;
    border: string;
    borderHover: string;
};

export type ButtonTheme = {
    [key in EButtonVariants]: ButtonThemeVariant;
};
