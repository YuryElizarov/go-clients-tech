import React from 'react';
import styled from "styled-components";
import {CreateView, SelectView} from '../../../views/MailingViews';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  & > div {
    width: calc(50% - 10px);
    max-width: 840px;
  }
`

function CreateMailingPage() {
    return (
        <Wrapper>
            <CreateView/>
            <SelectView/>
        </Wrapper>
    );
}

export default CreateMailingPage;