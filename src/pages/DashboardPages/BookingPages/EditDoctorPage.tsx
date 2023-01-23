import React from 'react';
import styled from "styled-components";
import {ServicesView} from "../../../views/BookingsViews";
import EditDoctorView from "../../../views/BookingsViews/EditDoctorView";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
`

function EditDoctorPage() {
    return (
        <Wrapper>
            <EditDoctorView/>
            <ServicesView/>
        </Wrapper>
    );
}

export default EditDoctorPage;