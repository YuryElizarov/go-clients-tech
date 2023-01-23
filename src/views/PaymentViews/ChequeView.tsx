import React, {useMemo} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {usePaymentState} from "../../store/payment/hooks";
import {IPayment} from "../../store/payment/types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  width: 100%;
  min-width: 25%;
  flex: 1;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`

const HeadingStyled = styled(Heading)`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  span {
    color: ${({theme}) => theme.colors.grayC4};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const List = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 40px;
  flex-direction: column;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 36px;
  }
`

const Block = styled(List)`
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const InfoBlock = styled(List)`
  gap: 4px;
`

const Name = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 10px;
  }
`

const Value = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

function ChequeView() {
    const {t} = useTranslation()
    const {selectedPayment, payments} = usePaymentState()
    const payment: IPayment | null = useMemo(() => payments.filter((item) => item.id === selectedPayment)[0] || null, [payments, selectedPayment])
    if (!payment) return null
    return (
        <Wrapper>
            <HeadingStyled as='h3'>{t("payment.cheque.title")} <span>{payment.id}</span></HeadingStyled>
            <List>
                <Block>
                    <InfoBlock>
                        <Name>{t("payment.cheque.date")}</Name>
                        <Value>{payment.date}</Value>
                    </InfoBlock>
                    <InfoBlock>
                        <Name>{t("payment.cheque.time")}</Name>
                        <Value>{payment.time}</Value>
                    </InfoBlock>
                    <InfoBlock>
                        <Name>{t("payment.cheque.id")}</Name>
                        <Value>{payment.id}</Value>
                    </InfoBlock>
                </Block>
                <Block>
                    <InfoBlock>
                        <Name>{t("payment.cheque.sender")}</Name>
                        <Value>{payment.sender}</Value>
                    </InfoBlock>
                    <InfoBlock>
                        <Name>{t("payment.cheque.senderNumber")}</Name>
                        <Value>{payment.senderNumber}</Value>
                    </InfoBlock>
                </Block>
                <Block>
                    <InfoBlock>
                        <Name>{t("payment.cheque.recipient")}</Name>
                        <Value>{payment.recipient}</Value>
                    </InfoBlock>
                    <InfoBlock>
                        <Name>{t("payment.cheque.recipientNumber")}</Name>
                        <Value>{payment.recipientNumber}</Value>
                    </InfoBlock>
                </Block>
                <Block>
                    <InfoBlock>
                        <Name>{t("payment.cheque.sum")}</Name>
                        <Value>{payment.sum}</Value>
                    </InfoBlock>
                </Block>
            </List>
        </Wrapper>
    );
}

export default ChequeView;