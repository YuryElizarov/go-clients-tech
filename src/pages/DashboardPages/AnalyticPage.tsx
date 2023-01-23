import React from 'react';
import styled from "styled-components";
import {HeaderView} from "../../views/AnalyticViews";
import {
    AppointmentsComponent,
    FollowCountComponent,
    PatientComponent, PatientSatisfactionComponent,
    RatingCountComponent,
    ReviewCountComponent
} from "../../components/AnalyticComponents";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.background};
`

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
`

function AnalyticPage() {
    return (
        <Wrapper>
            <HeaderView/>
            <Row>
                <AppointmentsComponent/>
                <PatientSatisfactionComponent/>
                <FollowCountComponent/>
                <PatientComponent/>
                <ReviewCountComponent/>
                <RatingCountComponent/>
            </Row>
        </Wrapper>
    );
}

export default AnalyticPage;