import React from 'react';
import {Route, Routes } from 'react-router-dom';
import ResetCSS from "./styles/ResetCSS";
import GlobalStyle from "./styles/Global";
import AuthPage from "./pages/AuthPages";
import DashboardPages from "./pages/DashboardPages";
import {Alert} from "./UI/Alert";
import BookingFormPages from './pages/BookingFormPages';
import FinalPage from "./pages/BookingFormPages/FinalPage";
import WebsitePages from "./pages/WebsitePages";

function App() {
    return (
        <>
            <ResetCSS/>
            <GlobalStyle/>
            <Alert/>
            <Routes>
                <Route path="/auth/*" element={<AuthPage/>} />
                <Route path="/website/*" element={<WebsitePages/>} />
                <Route path="/booking-form/final" element={<FinalPage/>} />
                <Route path="/booking-form" element={<BookingFormPages/>} />
                <Route path="/*" element={<DashboardPages/>} />
            </Routes>
        </>
    );
}

export default App;
