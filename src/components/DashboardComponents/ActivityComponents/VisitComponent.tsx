import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {IVisit} from "../../../types";

const HistoryBlock = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const ColumnTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }

`
const ColumnValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const Title = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Value = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const History = styled.div`
  width: 100%;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  display: flex;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const Separator = styled.hr`
  width: 100%;
  background-color: ${({theme}) => theme.colors.grayC4};
  height: 1px;
  border: none;
  margin: 0;
`

function HistoryComponent({
                              provider,
                              diagnosis,
                              gender,
                              email,
                              phone,
                              zipCode,
                              conclusion,
                              health,
                              recomend,
                          }: IVisit) {
    const {t} = useTranslation()
    return (
        <History>
            <HistoryBlock>
                <ColumnTitle>
                    <Title>{t("visit.provider")}</Title>
                    <Title>{t("visit.diagnosis")}</Title>
                    <Title>{t("visit.gender")}</Title>
                    <Title>{t("visit.email")}</Title>
                    <Title>{t("visit.phone")}</Title>
                    <Title>{t("visit.zip_code")}</Title>
                </ColumnTitle>
                <ColumnValue>
                    <Value>{provider}</Value>
                    <Value>{diagnosis}</Value>
                    <Value>{gender}</Value>
                    <Value>{email}</Value>
                    <Value>{phone}</Value>
                    <Value>{zipCode}</Value>
                </ColumnValue>
            </HistoryBlock>
            <Separator/>
            <HistoryBlock>
                <ColumnTitle>
                    <Title>{t("visit.conclusion")}</Title>
                </ColumnTitle>
                <ColumnValue>
                    <Value>{conclusion}</Value>
                </ColumnValue>
            </HistoryBlock>
            <Separator/>
            <HistoryBlock>
                <ColumnTitle>
                    <Title>{t("visit.health")}</Title>
                    <Title>{t("visit.recomend")}</Title>
                </ColumnTitle>
                <ColumnValue>
                    <Value>{health}</Value>
                    <Value>{recomend}</Value>
                </ColumnValue>
            </HistoryBlock>
        </History>
    );
}

export default HistoryComponent;