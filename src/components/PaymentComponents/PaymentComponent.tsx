import React from 'react';
import styled from "styled-components";
import {CreditCardIcon, TransactionIcon} from "../../UI/Svg";
import {EPayment, IPayment} from "../../store/payment/types";
import {usePaymentAction, usePaymentState} from "../../store/payment/hooks";

const Wrapper = styled.div<{isSelected: boolean}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 20px 15px;
  background: ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme, isSelected}) => theme.colors[isSelected ? 'green' :'borderInputDefault']} !important;
  &:hover {
    background: ${({theme}) => theme.colors.greenHover};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 12px;
  }
`

const DescBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Desc = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: flex-start;
  flex-direction: column;
`

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Text = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 10px;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  svg {
    width: 24px;
    height: 24px;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    width: 46px;
    height: 46px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const IconCredit = styled(Icon)`
  background: rgba(248, 194, 55, 0.1);
  svg path {
    stroke: #F8C237;
  }
`

const IconTransaction = styled(Icon)`
  background: rgba(11, 164, 149, 0.1);
  svg path {
    stroke: ${({theme}) => theme.colors.green};
  }
`
function PaymentComponent({payment: {id, payment, sender, sum, date}}: {payment: IPayment}) {
    const {selectedPayment} = usePaymentState()
    const {onSelectPayment} = usePaymentAction()
    return (
        <Wrapper isSelected={selectedPayment === id} onClick={() => onSelectPayment(id)}>
            <DescBlock>
                {payment === EPayment.Pay && <IconCredit><CreditCardIcon/></IconCredit>}
                {payment === EPayment.Transaction && <IconTransaction><TransactionIcon/></IconTransaction>}
                <Desc>
                    <Title>{sender}</Title>
                    <Text>{id}</Text>
                </Desc>
            </DescBlock>
            <Info>
                <Title>{sum}</Title>
                <Text>{date}</Text>
            </Info>
        </Wrapper>
    );
}

export default PaymentComponent;