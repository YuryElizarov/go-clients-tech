import React, {ReactNode} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {StatisticItemComponent} from "../../components/DashboardComponents/StatisticComponents";
import {Heading} from "../../UI/Heading";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  max-width: 414px;
  width: 100%;
`

const List = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
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
    percent: number
}> = [
    {
        title: 'total_send',
        value: 1200,
        period: '7',
        percent: 2
    },
    {
        title: 'opened',
        value: 980,
        period: '7',
        percent: 2
    },
    {
        title: 'clicked',
        value: 876,
        period: '7',
        percent: 2
    },
    {
        title: 'borsed',
        value: 514,
        period: '7',
        percent: 2
    }
]

const StatisticItem = styled(StatisticItemComponent)`
  box-shadow: none;
  max-width: calc(100% / 2 - 5px);
  background: ${({theme}) => theme.colors.lightBiege};
`

function StatisticView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("mailing.statistic.title")}</HeadingStyled>
            </Header>
            <List>
                {
                    mockStatistic.map((item, id) => <StatisticItem key={`statistic-${id}`} {...item}
                                                                   title={t(`mailing.statistic.${item.title}`)}/>)
                }
            </List>
        </Wrapper>
    );
}

export default StatisticView;