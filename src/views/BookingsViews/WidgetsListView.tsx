import React from 'react';
import styled from "styled-components";
import {UserIcon} from "../../UI/Svg";
import {WidgetComponent} from "../../components/BookingComponents";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
`

const Heading = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`

const List = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
  & > div {
    max-width: calc(100% / 5 - 8px);
  }
`

function WidgetsListView() {
    return (
        <Wrapper>
            <Heading>
                <UserIcon/>
                Go Clients Tech Smiles
            </Heading>
            <List>
                <WidgetComponent/>
                <WidgetComponent/>
                <WidgetComponent/>
                <WidgetComponent/>
                <WidgetComponent/>
            </List>
        </Wrapper>
    );
}

export default WidgetsListView;