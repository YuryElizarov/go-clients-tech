import React from 'react';
import styled from "styled-components";
import {DialogsView, MessengerAreaView} from "../../views/MessengerViews";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  max-height: 904px;
  overflow: hidden;
  margin-top: 12px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
    max-height: 80%;
  }
`

function MessengerPage() {
    return (
        <Wrapper>
            <DialogsView/>
            <MessengerAreaView/>
        </Wrapper>
    );
}

export default MessengerPage;