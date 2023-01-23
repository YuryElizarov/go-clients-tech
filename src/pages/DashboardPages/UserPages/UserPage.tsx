import React from 'react';
import styled from "styled-components";
import {LeftView, StatisticView, SettingView} from "../../../views/UserViews";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
`

function UserPage() {
    return (
        <Wrapper>
            <LeftView/>
            <SettingView/>
            <StatisticView/>
        </Wrapper>
    );
}

export default UserPage;