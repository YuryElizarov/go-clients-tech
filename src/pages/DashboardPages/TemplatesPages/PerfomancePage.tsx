import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {ReitingIcon} from "../../../UI/Svg";
import {mockPerfomance} from "../../../mock/templates";

const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 5px;
  padding: 20px 20px 0;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 16px 0;
  }
`

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;

  thead {
  }

  tbody tr {
    border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};

    &:last-child {
      border-bottom: none;
    }
  }

  th {
    padding: 20px 0 5px 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: ${({theme}) => theme.colors.grayC4};
    text-align: left;

    &:first-child {
    }

    &:last-child {
    }
  }

  td {
    padding: 30px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: ${({theme}) => theme.colors.black};
    text-align: left;

    &:first-child {
    }

    &:last-child {
    }
  }
`

const Scors = styled.div<{ isGold: boolean }>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 0;

  svg {
    width: 20px;
    height: 20px;

    path {
      fill: ${({isGold}) => isGold ? '#FFB800' : "#C4C4C4"};
    }
  }
`

const Value = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  margin-left: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`

function PerfomancePage() {
    const {t} = useTranslation()

    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <th>{t("templates.perfomance.headers.patient")}</th>
                    <th>{t("templates.perfomance.headers.doctor_seen")}</th>
                    <th>{t("templates.perfomance.headers.received")}</th>
                    <th>{t("templates.perfomance.headers.score")}</th>
                </tr>
                </thead>
                <tbody>
                {
                    mockPerfomance.map((item, id) => (
                        <tr key={`Form-${id}`}>
                            <td>{item.patient}</td>
                            <td>{item.doctor_seen}</td>
                            <td>{item.received}</td>
                            <td>
                                <ScoreWrapper>
                                    <Scors isGold>
                                        {
                                            [...Array(item.score).keys()].map((i, rid) => <ReitingIcon
                                                key={`${i}-${rid}`}/>)
                                        }
                                    </Scors>
                                    {
                                        item.score < 5 && <Scors isGold={false}>
                                            {
                                                [...Array(5 - item.score).keys()].map((i, rid) => <ReitingIcon
                                                    key={`${i}-${rid}`}/>)
                                            }
                                        </Scors>
                                    }
                                    <Value>{item.score.toFixed(1)}</Value>
                                </ScoreWrapper>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </Table>
        </Wrapper>
    );
}

export default PerfomancePage;