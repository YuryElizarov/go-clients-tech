import React from 'react';
import styled from "styled-components";
import {CheckView, ChequeView, StatisticView} from "../../views/PaymentViews";
import {usePaymentState} from "../../store/payment/hooks";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`
function PaymentPage() {
    const {selectedPayment, selectedCard} = usePaymentState()
    return (
        <Wrapper>
            <CheckView/>
            {selectedPayment !== null && selectedCard !== null && <ChequeView/>}
            <StatisticView/>
        </Wrapper>
    );
}

export default PaymentPage;