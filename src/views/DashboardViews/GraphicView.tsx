import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, ChartOptions, ChartData,
    registerables as registerablesJS
} from 'chart.js';
import {Chart} from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import {Heading} from "../../UI/Heading";

ChartJS.register(...registerablesJS);
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Wrapper = styled.div`
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  width: 100%;
  max-height: 416px;
  flex: 1;
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 120%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    margin-bottom: 16px;
  }
`

const Filters = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
`

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px;
  background: ${({theme, isActive}) => isActive ? theme.colors.lightBiege : 'transparent'};
  color: ${({theme, isActive}) => theme.colors[isActive ? 'green' : 'black']};
  border-radius: 6px;
  cursor: pointer;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 6px 12px;
    font-size: 12px;
  }
`

const ChartWrapper = styled.div`
  width: 100%;
  max-height: 321px;
`

const ChartStyled = styled(Chart)`
  width: 100% !important;
  height: 100% !important;
`

enum ETab {
    Day,
    Week,
    Month,
    Year
}

export const options: ChartOptions = {
    responsive: true, maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            ticks: {
                stepSize: 1000,
            },
            grid: {
                display: false,
            },
        },
    },
    plugins: {
        datalabels: {
            display: false,
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
        tooltip: {
            backgroundColor: '#0BA495',
            displayColors: false,
        },
    },
};

const labels = [...Array(19).keys()];

export const data: ChartData = {
    labels: labels.map((item) => item + 1),
    datasets: [
        {
            data: labels.map(() => faker.datatype.number({min: 0, max: 4000})),
            borderColor: '#0BA495',
            backgroundColor: '#0BA495',
            tension: .4,
            pointRadius: 2,
            borderWidth: 2,
        },
    ],
};

function GraphicView() {
    const {t} = useTranslation()
    const [activeTab, setActiveTab] = useState<ETab>(ETab.Day);

    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("statistic.graphic.title")}</HeadingStyled>
                <Filters>
                    <Tab onClick={() => setActiveTab(ETab.Day)}
                         isActive={activeTab === ETab.Day}>{t("statistic.graphic.tabs.day")}</Tab>
                    <Tab onClick={() => setActiveTab(ETab.Week)}
                         isActive={activeTab === ETab.Week}>{t("statistic.graphic.tabs.week")}</Tab>
                    <Tab onClick={() => setActiveTab(ETab.Month)}
                         isActive={activeTab === ETab.Month}>{t("statistic.graphic.tabs.month")}</Tab>
                    <Tab onClick={() => setActiveTab(ETab.Year)}
                         isActive={activeTab === ETab.Year}>{t("statistic.graphic.tabs.year")}</Tab>
                </Filters>
            </Header>
            <ChartWrapper>
                <ChartStyled type='line' options={options} data={data}/>
            </ChartWrapper>
        </Wrapper>
    );
}

export default GraphicView;