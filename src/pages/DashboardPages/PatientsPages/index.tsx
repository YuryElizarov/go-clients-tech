import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PatientsPage from "./PatientsPage";
import {AddPatientModal} from "../../../components/Modals";
import PatientPage from "./PatientPage";

function Index() {
    return (
        <>
            <AddPatientModal/>
            <Routes>
                <Route path="/" element={<PatientsPage/>}/>
                <Route path="/patient" element={<PatientPage/>}/>
            </Routes>
        </>
    );
}

export default Index;