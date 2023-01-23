export type Breakpoints = string[];

export type MediaQueries = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    ll: string;
    nav: string;
};


// export type Gradients = {
//   bubblegum: string;
// };

export type Colors = {
    background: string,
    white: string,
    black: string,
    gray: string,
    greenHover: string,
    darkGrey: string,
    redHover: string,
    grayC4: string,
    red: string,
    borderInputDefault: string,
    modalWrapper: string,
    green: string,
    lightBiege: string,
    backgroundDashboard: string,
};

export type ColorsKey = keyof Colors
export type Shadows = {
    // regular: string
};