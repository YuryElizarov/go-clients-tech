import React from 'react';
import {Route, Routes} from "react-router-dom";
import { TabsView } from '../../../views/BookingsViews';
import AccountsPage from './AccountsPage';
import SetupPage from "./SetupPage";

const links: Array<{title: string, link: string}> = [
    {title: 'advertisement.tabs.ads_setup', link: '/advertisement'},
    {title: 'advertisement.tabs.accounts', link: '/advertisement/accounts'}
]
function Index() {
    return (
        <>
            <TabsView links={links}/>
            <Routes>
                <Route path="/" element={<SetupPage/>}/>
                <Route path="/accounts" element={<AccountsPage/>}/>
            </Routes>
        </>
    );
}

export default Index;