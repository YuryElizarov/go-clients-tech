import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import RowComponent from './RowComponent';

const Wrapper = styled.div`
  width: 100%;
`

const Table = styled.table`
  width: 100%;

  thead {

  }

  th {
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    color: ${({theme}) => theme.colors.grayC4};
    text-align: left;

    &:nth-child(5), &:nth-child(6) {
      color: ${({theme}) => theme.colors.red};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    th {
      font-size: 10px;
    }
  }
`

function ReminderTableComponent() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <th>{t("reminder.table.patient_name")}</th>
                    <th>{t("reminder.table.app_time")}</th>
                    <th>{t("reminder.table.cellphone")}</th>
                    <th>{t("reminder.table.email")}</th>
                    <th>{t("reminder.table.send")}</th>
                    <th>{t("reminder.table.opt_out")}</th>
                    <th>{t("reminder.table.response")}</th>
                </tr>
                </thead>
                <tbody>
                <RowComponent/>
                <RowComponent/>
                <RowComponent/>
                <RowComponent/>
                <RowComponent/>
                </tbody>
            </Table>
        </Wrapper>
    );
}

export default ReminderTableComponent;