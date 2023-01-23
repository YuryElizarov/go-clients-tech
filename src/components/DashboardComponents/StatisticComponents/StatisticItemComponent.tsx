import React, {ReactNode} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";

interface StatisticItemProps {
    title: string,
    value: number | ReactNode
    period: string,
    percent: number,
    isNegative?: boolean
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  max-width: calc(100% / 5);
  width: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`

const Title = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  margin: 0;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Value = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  margin-top: 16px;

  span {
    color: ${({theme}) => theme.colors.gray};

    &.success {
      color: ${({theme}) => theme.colors.green};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 22px;
    margin-top: 12px;
  }
`

const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`

const Period = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Percent = styled.p<{ percent: number, isNegative?:boolean }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${({theme, percent, isNegative}) => theme.colors[(isNegative && percent < 0) || (isNegative && percent > 0) ? 'red' : 'green']};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

function StatisticItemComponent({title, percent, period, value, isNegative, ...props}: StatisticItemProps) {
    const {t} = useTranslation()
    return (
        <Wrapper {...props}>
            <Title>{title}</Title>
            <Value>{value}</Value>
            <Footer>
                <Period>{t(`statistic.periods.days`, '', {period})}</Period>
                <Percent isNegative={isNegative} percent={percent}>{percent}%</Percent>
            </Footer>
        </Wrapper>
    );
}

export default StatisticItemComponent;