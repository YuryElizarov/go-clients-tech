import React from 'react';
import styled from "styled-components";
import {AddLocationView, LinkedView} from "../../../views/MapViews";
import ReviewView from "../../../views/MapViews/ReviewView";

const Wrapper = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1;
`

function CreateBranch() {
    return (
        <Wrapper>
            <AddLocationView/>
            <ReviewView/>
            <LinkedView/>
        </Wrapper>
    );
}

export default CreateBranch;