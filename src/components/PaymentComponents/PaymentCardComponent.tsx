import React from 'react';
import styled from "styled-components";
import mir from '../../assets/images/mir.png'
import visa from '../../assets/images/visa.png'
import mastercard from '../../assets/images/mastercard.png'
import {usePaymentAction, usePaymentState} from "../../store/payment/hooks";
import {ECard, IPaymentCard} from "../../store/payment/types";


const Icon = styled.img`
  width: 100%;
  height: 56.6px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 4px;
`

const Bank = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  margin: 0;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 10px;
  }
`

const CardNumber = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Wrapper = styled.div<{isSelected: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 8px;
  cursor: pointer;
  border: 1px solid ${({theme, isSelected}) => theme.colors[isSelected ? 'green' :'borderInputDefault']};
  background: ${({theme, isSelected}) => theme.colors[isSelected ? 'greenHover' :'background']};
  border-radius: 10px;
  ${Bank} {
    color: ${({theme, isSelected}) => theme.colors[isSelected ? 'darkGrey' :'grayC4']};
  }
`
function PaymentCardComponent({card: {card, cardNumber, bank, id}}: {card: IPaymentCard}) {
    const {selectedCard} = usePaymentState()
    const {onSelectCard} = usePaymentAction()
    return (
        <Wrapper isSelected={id === selectedCard} onClick={() => onSelectCard(id)}>
            {card === ECard.Mastercard && <Icon src={mastercard}/>}
            {card === ECard.Visa && <Icon src={visa}/>}
            {card === ECard.Mir && <Icon src={mir}/>}
            <Info>
                <Bank>{bank}</Bank>
                <CardNumber>{cardNumber}</CardNumber>
            </Info>
        </Wrapper>
    );
}

export default PaymentCardComponent;