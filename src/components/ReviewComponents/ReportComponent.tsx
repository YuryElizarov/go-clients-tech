import React from 'react';
import styled, {useTheme} from "styled-components";
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
import {useTranslation} from "react-i18next";
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
  box-shadow: none;
  border-radius: 10px;
  max-width: calc(50% - 5px);
  background: ${({theme}) => theme.colors.lightBiege};
  padding: 24px;
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 20px;
    gap: 16px;
  }
`

const HeadingStyled = styled(Heading)`
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
`

const ChartWrapper = styled.div`
  width: 100%;
  height: 79px;
`

const ChartStyled = styled(Chart)`
  width: 100% !important;
  height: 100% !important;
`

const LegendList = styled.ul`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const LegenItem = styled.li<{color: string}>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 4px;font-weight: 400;
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

export const options: ChartOptions = {
    responsive: true, maintainAspectRatio: false,
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
            display: false,
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

const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',
];

export const data: ChartData = {
    labels,
    datasets: [
        {
            data: labels.map(() => faker.datatype.number({min: 0, max: 200})),
            borderColor: '#0BA495',
            backgroundColor: '#0BA495',
            tension: .4,
            pointRadius: 0,
            borderWidth: 2,
        },
        {
            data: labels.map(() => faker.datatype.number({min: 0, max: 200})),
            borderColor: '#E26161',
            backgroundColor: '#E26161',
            tension: .4,
            pointRadius: 0,
            borderWidth: 2,
        },
    ],
};
function ReportComponent({...props}) {
    const {t} = useTranslation()
    const {colors} = useTheme()
    return (
        <Wrapper {...props}>
            <Header>
                <HeadingStyled as='h4'>{t("reviews.statistic.report")}</HeadingStyled>
                <LegendList>
                    <LegenItem color={colors.green}><span />Facebook</LegenItem>
                    <LegenItem color={colors.red}><span /> Google</LegenItem>
                </LegendList>
            </Header>
            <ChartWrapper>
                <ChartStyled type='line' options={options} data={data}/>
            </ChartWrapper>
        </Wrapper>
    );
}

export default ReportComponent;