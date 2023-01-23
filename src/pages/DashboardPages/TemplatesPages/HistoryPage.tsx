import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {mockHistory} from "../../../mock/templates";

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

    &:nth-child(3), &:nth-child(4) {
      color: ${({theme}) => theme.colors.gray};
    }

    &:last-child {
    }
  }
`
function HistoryPage() {
    const {t} = useTranslation()

    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <th>{t("templates.history.headers.patient")}</th>
                    <th>{t("templates.history.headers.communication")}</th>
                    <th>{t("templates.history.headers.type")}</th>
                    <th>{t("templates.history.headers.sent")}</th>
                    <th>{t("templates.history.headers.provider")}</th>
                    <th>{t("templates.history.headers.appointment")}</th>
                </tr>
                </thead>
                <tbody>
                {
                    mockHistory.map((item, id) => (
                        <tr key={`History-${id}`}>
                            <td>{item.patient}</td>
                            <td>{item.communication}</td>
                            <td>{item.type}</td>
                            <td>{item.sent}</td>
                            <td>{item.provider}</td>
                            <td>{item.appointment}</td>
                        </tr>
                    ))
                }

                </tbody>
            </Table>
        </Wrapper>
    );
}

export default HistoryPage;