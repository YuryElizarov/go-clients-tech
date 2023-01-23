import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {StatisticItemComponent} from "../../components/DashboardComponents/StatisticComponents";
import {ReportComponent} from "../../components/ReviewComponents";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  max-width: 696px;
`
const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 120%;
`

const List = styled.div`
  width: 100%;
  display: flex;
  align-content: flex-start;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`

const StatisticItemStyled = styled(StatisticItemComponent)`
  box-shadow: none;
  max-width: calc(50% - 5px);
  background: ${({theme}) => theme.colors.lightBiege};
`
function StatisticView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <HeadingStyled as='h3'>{t("reviews.statistic.title")}</HeadingStyled>
            <List>
                <StatisticItemStyled title={t("reviews.statistic.google")} value={123} period="7" percent={2}/>
                <StatisticItemStyled title={t("reviews.statistic.facebook")} value={98} period="7" percent={2}/>
                <StatisticItemStyled title={t("reviews.statistic.negative")} value={16} period="7" percent={-2}/>
                <ReportComponent/>
            </List>
        </Wrapper>
    );
}

export default StatisticView;