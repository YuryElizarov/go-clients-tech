import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
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

const mockStatistic: Array<{
    title: string,
    value: number | ReactNode
    period: string,
    percent: number
}> = [
    {
        title: 'total_patients',
        value: 20572,
        period: '7',
        percent: 2
    },
    {
        title: 'total_mails',
        value: <>5 <span>/ 0</span></>,
        period: '7',
        percent: 2
    },
]
const labels = ['Пн, 22 авг', 'Вт, 23 авг', 'Ср, 24 авг', 'Чт, 25 авг', 'Пт, 26 авг', 'Сб, 27 авг', 'Вс, 28 авг'];

const getColor = (id: number): string => id === 6 ? '#0BA495' : '#E7F6F5'

const dataset = labels.map(() => faker.datatype.number({min: 1, max: 100}))
const colors = dataset.map((item, id) => getColor(id))
const colorsLabels = '#0BA495'
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
            color: colorsLabels,
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
            data: dataset,
            borderColor: colors,
            backgroundColor: colors,
            borderRadius: 5
        },
    ],
};
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

const Tabs = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 0;
`
const Tab = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  padding: 8px 16px;
  background: ${({theme, isSelected}) => theme.colors[isSelected ? 'lightBiege' : 'background']};
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme, isSelected}) => theme.colors[isSelected ? 'green' : 'black']};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    padding: 6px 12px;
  }
`

const tabs: string[] = [
    "total",
    "new",
    "inactive",
    "missing_mails",
    "missing_sms",
]

function RatingCountComponent() {
    const {t} = useTranslation()
    const [selectedTab, setSelectedTab] = useState<number>(0);
    return (
        <Wrapper>
            <Header>
                <TitleStyled>{t('analytic.patient.title')}</TitleStyled>
                <Buttons>
                    <Tabs>
                        {
                            tabs.map((item, id) =>
                                <Tab key={`Tab-${id}`} isSelected={id === selectedTab}
                                     onClick={() => setSelectedTab(id)}>
                                    {t(`analytic.patient.tabs.${item}`)}
                                </Tab>)
                        }
                    </Tabs>
                    <ButtonStyled
                        variant={EButtonVariants.Gray}><Download/>{t('analytic.patient.button')}
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
                                                                   title={t(`analytic.patient.statistic.${item.title}`)}/>)
                }
            </List>
        </Wrapper>
    );
}

export default RatingCountComponent;