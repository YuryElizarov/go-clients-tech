import React from 'react';
import styled from "styled-components";
import {DoctorsView, ServicesView} from "../../../views/BookingsViews";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
`

function SettingsPage() {
    return (
        <Wrapper>
            <ServicesView/>
            <DoctorsView/>
        </Wrapper>
    );
}

export default SettingsPage;