import React from 'react';
import styled from "styled-components";
import ContentView from "../../views/ContructorViews/ContentView";
import {SelectView} from "../../views/ContructorViews";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 12px;
`

function ConstructorPage() {
    return (
        <Wrapper>
            <ContentView/>
            <SelectView/>
        </Wrapper>
    );
}

export default ConstructorPage;