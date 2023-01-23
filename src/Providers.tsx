import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import {Provider} from "react-redux";
import {theme} from "./theme";
import {store} from "./store";


interface Props {
    children: React.ReactNode
}

function Providers({children}: Props) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

export default Providers;