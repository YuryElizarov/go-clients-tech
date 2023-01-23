import React from 'react';
import {Route, Routes} from "react-router-dom";
import FAPage from "./FAPage";
import LoginPage from "./LoginPage";

function Auth() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/2factor" element={<FAPage/>} />
        </Routes>
    );
}

export default Auth;