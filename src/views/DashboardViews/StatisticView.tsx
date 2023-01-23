import React, {ReactNode} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {StatisticItemComponent} from "../../components/DashboardComponents/StatisticComponents";

const List = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;
`

const mockStatistic: Array<{
    title: string,
    value: number | ReactNode
    period: string,
    percent: number
}> = [
    {
        title: 'patients',
        value: 257,
        period: '7',
        percent: -18
    },
    {
        title: 'appointments',
        value: <>10 <span>/ 12</span></>,
        period: '7',
        percent: 18
    },
    {
        title: 'reminders',
        value: <>10 <span>/ 12</span></>,
        period: '7',
        percent: 18
    },
    {
        title: 'satisfaction',
        value: <>24 <span>/ 56</span></>,
        period: '7',
        percent: 18
    },
    {
        title: 'canceled',
        value: <><span className="success">4.8</span> <span>(128)</span></>,
        period: '7',
        percent: 2
    },
]

function StatisticView() {
    const {t} = useTranslation()
    return (
        <List>
            {
                mockStatistic.map((item, id) => <StatisticItemComponent key={`statistic-${id}`} {...item} title={t(`statistic.${item.title}`)}/>)
            }
        </List>
    );
}

export default StatisticView;