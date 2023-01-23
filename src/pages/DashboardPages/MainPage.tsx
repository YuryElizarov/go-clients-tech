import React from 'react';
import styled from "styled-components";
import {ActivityView, GraphicView, NotesView, RemindersView, StatisticView} from "../../views/DashboardViews";

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
`

const RightBlock = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

const TopBlock = styled.div`
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
`

function MainPage() {
    return (
        <Content>
            <ActivityView/>
            <RightBlock>
                <TopBlock>
                    <GraphicView/>
                    <NotesView/>
                </TopBlock>
                <StatisticView/>
                <RemindersView/>
            </RightBlock>
        </Content>
    );
}

export default MainPage;