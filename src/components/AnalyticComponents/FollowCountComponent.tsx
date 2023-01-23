import React, {ReactNode} from 'react';
import styled, {useTheme} from "styled-components";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {useTranslation} from "react-i18next";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend, ChartOptions, ChartData,
    registerables as registerablesJS, BarElement
} from 'chart.js';
import {Chart} from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import {Button, EButtonVariants} from "../../UI/Button";
import Download from "../../UI/Svg/icons/Download";
import {StatisticItemComponent} from "../DashboardComponents/StatisticComponents";

ChartJS.register(...registerablesJS);
ChartJS.register(ChartDataLabels);
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  width: 100%;
  max-width: 50%;
  height: 580px;
  border-width: 1px 1px 0 0;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.borderInputDefault};
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-content: center;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const TitleStyled = styled.h4`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`
const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  border-radius: 5px;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    padding: 6px 8px;
  }
`

const StatisticItem = styled(StatisticItemComponent)`
  box-shadow: none;
  gap: 16px;
  max-width: calc(100% / 2 - 5px);
  background: ${({theme}) => theme.colors.lightBiege};

  & > div:nth-child(2) {
    margin-top: 0;
  }
`

const List = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;
  flex-wrap: wrap;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const WrapGraph = styled.div`
  width: 100%;
  height: 336px;
  flex: 1;
`

const ChartStyled = styled(Chart)`
  width: 100% !important;
  max-height: 100% !important;
`
const LegendList = styled.ul`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const LegendItem = styled.li<{ color: string }>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 4px;
  font-weight: 400;
  font-size: 8px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.darkGrey};

  span {
    display: flex;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({color}) => color};
  }
`

const mockStatistic: Array<{
    title: string,
    value: number | ReactNode
    period: string,
    percent: number
}> = [
    {
        title: 'total_mail',
        value: <>174 284 <span>/ 160 577</span></>,
        period: '7',
        percent: 2
    },
    {
        title: 'total_sms',
        value: <>174 284  <span>/ 172 917</span></>,
        period: '7',
        percent: 2
    },
]
const labels = ['Пн, 22 авг', 'Вт, 23 авг', 'Ср, 24 авг', 'Чт, 25 авг', 'Пт, 26 авг', 'Сб, 27 авг', 'Вс, 28 авг'];

const getColorGreen = (id: number): string => id === 4 ? '#0BA495' : '#E7F6F5'
const getColorRed = (id: number): string => id === 4 ? '#E26161' : '#FBECEC'

const colorsGreen = labels.map((item, id) => getColorGreen(id))
const colorsRed = labels.map((item, id) => getColorRed(id))
export const options: ChartOptions = {
    responsive: true, maintainAspectRatio: false,
    layout: {
        padding: {
            top: 20,
        }
    },
    scales: {
        x: {
            border: {
                display: false
            },
            grid: {
                display: false,
            },
        },
        y: {
            ticks: {
                stepSize: 20,
            },
            grid: {
                display: false,
            },
        },
    },
    plugins: {
        datalabels: {
            color: ["#0BA495", "#E26161"],
            anchor: "end",
            offset: -20,
            align: "start"
        },
        tooltip: {
            enabled: false,
        },
        legend: {
            display: false,
            labels: {
                font: {
                    size: 16
                },
            }
        },
        title: {
            display: false,
        },
    },
};


export const data: ChartData = {
    labels,
    datasets: [
        {
            data: labels.map(() => faker.datatype.number({min: 1, max: 100})),
            borderColor: colorsGreen,
            backgroundColor: colorsGreen,
            borderRadius: 5
        },
        {
            data: labels.map(() => faker.datatype.number({min: 1, max: 100})),
            borderColor: colorsRed,
            backgroundColor: colorsRed,
            borderRadius: 5
        },
    ],
};

function FollowCountComponent() {
    const {colors} = useTheme()
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Header>
                <TitleStyled>{t('analytic.follow_count.title')}</TitleStyled>
                <Buttons>
                    <LegendList>
                        <LegendItem color={colors.green}><span/>Emails messages</LegendItem>
                        <LegendItem color={colors.red}><span/> SMS messages</LegendItem>
                    </LegendList>
                    <ButtonStyled
                        variant={EButtonVariants.Gray}><Download/>{t('analytic.follow_count.button')}
                    </ButtonStyled>
                </Buttons>
            </Header>
            <WrapGraph>
                <ChartStyled type='bar'
                             options={options}
                             data={data}/>
            </WrapGraph>
            <List>
                {
                    mockStatistic.map((item, id) => <StatisticItem key={`analytic-${id}`} {...item}
                                                                   title={t(`analytic.follow_count.statistic.${item.title}`)}/>)
                }
            </List>
        </Wrapper>
    );
}

export default FollowCountComponent;