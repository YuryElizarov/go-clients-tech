import React from 'react';
import styled from "styled-components";
import {ActionsView, EditView} from "../../../views/TemplatesViews";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;  
`

function ActionPage() {
    return (
        <Wrapper>
            <ActionsView/>
            <EditView/>
        </Wrapper>
    );
}

export default ActionPage;