import React, {ReactNode} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {StatisticItemComponent} from "../../components/DashboardComponents/StatisticComponents";
import {Heading} from "../../UI/Heading";
import {usePaymentState} from "../../store/payment/hooks";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  min-width: 25%;
  flex: 1;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`

const List = styled.div<{ isColumn: boolean }>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  flex-wrap: ${({isColumn}) => isColumn ? 'wrap' : 'nowrap' };
  gap: 10px;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
`

const mockStatistic: Array<{
    title: string,
    value: number | ReactNode
    period: string,
    percent: number,
    isNegative?: boolean
}> = [
    {
        title: 'income',
        value: <>+51 200</>,
        period: '7',
        percent: 2
    },
    {
        title: 'failed_transition',
        value: 3,
        period: '7',
        percent: 2,
        isNegative: true
    },
    {
        title: 'success_transition',
        value: 67,
        period: '7',
        percent: 15
    }
]

const StatisticItem = styled(StatisticItemComponent)<{ isColumn: boolean }>`
  box-shadow: none;
  width: 100%;
  min-width: calc(100% / 3 - (20px / 3));
  background: ${({theme}) => theme.colors.lightBiege};
  //min-width: 261px;
  ${({isColumn}) => isColumn ? 'max-width: unset;' : ''}
`

function StatisticView() {
    const {t} = useTranslation()
    const {selectedPayment, selectedCard} = usePaymentState()
    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("payment.statistic.title")}</HeadingStyled>
            </Header>
             <List isColumn={selectedCard !== null && selectedPayment !== null}>
                {
                    mockStatistic.map((item, id) => <StatisticItem
                        isColumn={selectedCard !== null && selectedPayment !== null} key={`statistic-${id}`} {...item}
                        title={t(`payment.statistic.${item.title}`)}/>)
                }
            </List>
        </Wrapper>
    );
}

export default StatisticView;