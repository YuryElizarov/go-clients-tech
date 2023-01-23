import React from 'react';
import styled from "styled-components";
import {AddDoctorView, ServicesView} from "../../../views/BookingsViews";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
`

function AddDoctorPage() {
    return (
        <Wrapper>
            <AddDoctorView/>
            <ServicesView/>
        </Wrapper>
    );
}

export default AddDoctorPage;