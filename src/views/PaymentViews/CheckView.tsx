import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {CardComponent} from "../../components/UserComponents";
import {usePaymentState} from "../../store/payment/hooks";
import {Heading} from "../../UI/Heading";
import {PaymentComponent, PaymentCardComponent} from "../../components/PaymentComponents";
import NewCardComponent from "../../components/PaymentComponents/NewCardComponent";

const Card = styled(CardComponent)`
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  width: 100%;
  flex: 2;
  ${({theme}) => theme.mediaQueries.ll} {
    
  }
`

const CardList = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 8px;
  }
`

const PaymentList = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  & > * {
    &:first-child {
      border-radius: 10px 10px 0 0;
      border-bottom: none;
    }
    &:last-child {
      border-top: 1px solid ${({theme}) => theme.colors.borderInputDefault};;
      border-radius: 0 0 10px 10px;
    }
  }
`

const PaymentWrapper = styled.div`
  width: 100%;
  padding: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const PaymentHeader = styled(Heading)`
  padding: 15px;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    padding: 12px;
  }
`

function CheckView() {
    const {t} = useTranslation()
    const {cards, payments} = usePaymentState()
    return (
        <Card title={t("payment.check.title")}>
            <CardList>
                {
                    cards.map((card, id) => <PaymentCardComponent card={card} key={`Card-${id}`}/>)
                }
                <NewCardComponent/>
            </CardList>
            <PaymentWrapper>
                <PaymentList>
                    <PaymentHeader as='h4'>{t("payment.check.payments")}</PaymentHeader>
                    {payments.map((payment) => <PaymentComponent key={payment.id} payment={payment} />)}
                </PaymentList>
            </PaymentWrapper>
        </Card>
    );
}

export default CheckView;