import React from 'react';
import {Route, Routes} from "react-router-dom";
import MailingPage from "./MailingPage";
import CreateMailingPage from "./CreateMailingPage";

function Index() {
    return (
        <Routes>
            <Route path="/" element={<MailingPage/>}/>
            <Route path="/create" element={<CreateMailingPage/>}/>
        </Routes>
    );
}

export default Index;