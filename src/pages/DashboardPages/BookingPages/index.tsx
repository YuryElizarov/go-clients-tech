import React from 'react';
import {Route, Routes} from "react-router-dom";
import {TabsView} from '../../../views/BookingsViews';
import PatientsPage from "./PatientsPage";
import WidgetsPage from './WidgetsPage';
import SettingsPage from "./SettingsPage";
import AddDoctorPage from './AddDoctorPage';
import EditDoctorPage from "./EditDoctorPage";

const links: Array<{title: string, link: string}> = [
    {title: 'booking.tabs.patients', link: '/booking'},
    {title: 'booking.tabs.settings', link: '/booking/settings'},
    {title: 'booking.tabs.widgets', link: '/booking/widgets'},
]

function Index() {
    return (
        <Routes>
            <Route path="/" element={<><TabsView links={links}/><PatientsPage/></>}/>
            <Route path="/widgets" element={<><TabsView links={links}/><WidgetsPage/></>}/>
            <Route path="/settings" element={<><TabsView links={links}/><SettingsPage/></>}/>
            <Route path="/settings/add" element={<AddDoctorPage/>}/>
            <Route path="/settings/edit" element={<EditDoctorPage/>}/>
        </Routes>
    );
}

export default Index;