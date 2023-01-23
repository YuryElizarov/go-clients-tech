import React from 'react';
import styled from "styled-components";
import {PatientInfoView, PatientsTableView } from '../../../views/FormViews';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
`

function PatientsPage() {
    return (
        <Wrapper>
            <PatientsTableView/>
            <PatientInfoView/>
        </Wrapper>
    );
}

export default PatientsPage;