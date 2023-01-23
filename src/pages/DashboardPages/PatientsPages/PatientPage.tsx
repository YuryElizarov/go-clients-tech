import React from 'react';
import styled from "styled-components";
import {ActivityView, RightView} from '../../../views/PatientsVies';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`
function PatientPage() {
    return (
        <Wrapper>
            <ActivityView/>
            <RightView/>
        </Wrapper>
    );
}

export default PatientPage;