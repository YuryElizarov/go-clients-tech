import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {DeleteIcon} from "../../UI/Svg";
import {mockMailing} from "../../mock/mailing";

const Wrapper = styled.div`
  width: 100%;
`

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;

  thead {
  }

  th {
    padding: 20px 0 5px 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: ${({theme}) => theme.colors.grayC4};
    text-align: left;

    &:first-child {
      padding-left: 20px;
    }

    &:last-child {
      padding-right: 20px;
    }
  }
  tbody tr{
    border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
    &:last-child {
      border-bottom: none;
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
      padding-left: 20px;
    }

    &:last-child {
      padding-right: 20px;
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    td{
      padding: 24px 0;
      font-size: 12px;
      &:first-child {
        padding-left: 16px;
      }

      &:last-child {
        padding-right: 16px;
      }
    }
  }
`

const StatusBlock = styled.div<{ isOn: boolean }>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 7px;
  color: ${({theme, isOn}) => theme.colors[isOn ? 'green' : 'gray']};

  span {
    display: flex;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({theme, isOn}) => theme.colors[isOn ? 'green' : 'gray']};
  }
`
const Actions = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 24px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 20px;
  }
`
const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

const DateBlock = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: ${({theme}) => theme.colors.gray};

  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    span{
      font-size: 10px;
    }
  }
`

function TableComponent() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <th>{t("mailing.headers.status.title")}</th>
                    <th>{t("mailing.headers.name")}</th>
                    <th>{t("mailing.headers.total_sent")}</th>
                    <th>{t("mailing.headers.recipient")}</th>
                    <th>{t("mailing.headers.open_rate")}</th>
                    <th>{t("mailing.headers.clicked")}</th>
                    <th>{t("mailing.headers.last_updated")}</th>
                    <th>{t("mailing.headers.created")}</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>

                {
                    mockMailing.map((item, id) => (
                        <tr key={`Mailing-${id}`}>
                            <td>
                                <StatusBlock isOn={item.status}>
                                    <span/>
                                    {t(`mailing.headers.status.${item.status ? 'on' : 'off'}`)}
                                </StatusBlock>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.total_sent}</td>
                            <td>{item.recipient}</td>
                            <td>{item.open_rate}</td>
                            <td>{item.clicked}</td>
                            <td>
                                <DateBlock>
                                    {item.last_updated.date}
                                    <span>{item.last_updated.userName}</span>
                                </DateBlock>
                            </td>
                            <td>
                                <DateBlock>
                                    {item.created.date}
                                    <span>{item.created.userName}</span>
                                </DateBlock>
                            </td>
                            <td>
                                <Actions>
                                    <ButtonIcon><DeleteIcon/></ButtonIcon>
                                </Actions>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </Wrapper>
    );
}

export default TableComponent;