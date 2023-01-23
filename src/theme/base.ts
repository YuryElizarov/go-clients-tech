import {MediaQueries, Breakpoints, Shadows} from "./types";

export const breakpointMap: { [key: string]: number } = {
    xs: 320,
    sm: 576,
    md: 768,
    lg: 968,
    xl: 1040,
    xxl: 1200,
    ll: 1920,
};

export const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

export const mediaQueries: MediaQueries = {
    xs: `@media screen and (max-width: ${breakpointMap.xs}px)`,
    sm: `@media screen and (max-width: ${breakpointMap.sm}px)`,
    md: `@media screen and (max-width: ${breakpointMap.md}px)`,
    lg: `@media screen and (max-width: ${breakpointMap.lg}px)`,
    xl: `@media screen and (max-width: ${breakpointMap.xl}px)`,
    xxl: `@media screen and (max-width: ${breakpointMap.xxl}px)`,
    ll: `@media screen and (max-width: ${breakpointMap.ll}px)`,
    nav: `@media screen and (max-width: ${breakpointMap.lg}px)`,
};

export const shadows: Shadows= {
    // regular: "0px 1px 4px rgba(0, 0, 0, 0.18)",
};