import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ColorsKey} from "../../theme/types";
import {useBookingState} from "../../store/booking/hooks";
import { EPatientStatus } from '../../types';

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
`

const LinkStyled = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-decoration-line: underline;
  color: ${({theme}) => theme.colors.green};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`


const status: {[stat in EPatientStatus]: ColorsKey} = {
    [EPatientStatus.Default]: 'darkGrey',
    [EPatientStatus.Error]: 'red',
    [EPatientStatus.Success]: 'green',
}

const StatusBlock = styled.div<{stat: EPatientStatus}>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 7px;
  color: ${({theme, stat}) => theme.colors[status[stat]]};
  span {
    display: flex;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({theme, stat}) => theme.colors[status[stat]]};
  }
`

function TablePatientsView() {
    const {t} = useTranslation()
    const {patients} = useBookingState()
    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <th>{t("booking.patients.table.patient_name")}</th>
                    <th>{t("booking.patients.table.birth")}</th>
                    <th>{t("booking.patients.table.cellphone")}</th>
                    <th>{t("booking.patients.table.email")}</th>
                    <th>{t("booking.patients.table.patient_status")}</th>
                    <th>{t("booking.patients.table.appt_created")}</th>
                    <th>{t("booking.patients.table.appt_status")}</th>
                    <th>{t("booking.patients.table.provider")}</th>
                    <th>{t("booking.patients.table.response")}</th>
                    <th>{t("booking.patients.table.charge")}</th>
                </tr>
                </thead>
                <tbody>
                {
                    patients.map((patient, id) => <tr key={`Patient-${id}`}>
                        <td><LinkStyled to='/'>{patient.name} {patient.soname}</LinkStyled></td>
                        <td>{patient.birth}</td>
                        <td>{patient.phone}</td>
                        <td>{patient.email}</td>
                        <td>
                            <StatusBlock stat={patient.status}><span />
                                {t(`booking.patients.table.${patient.status === EPatientStatus.Success ? 'new' : 'existing'}`)}
                            </StatusBlock>
                        </td>
                        <td>{patient.apptCreated}</td>
                        <td>{patient.apptStatus}</td>
                        <td>{patient.provider}</td>
                        <td>{patient.response}</td>
                        <td>
                            {
                                patient.charge && <StatusBlock stat={EPatientStatus.Success}><span />{t("booking.patients.table.charge_on")}</StatusBlock>
                            }
                        </td>
                    </tr>)
                }
                </tbody>
            </Table>
        </Wrapper>
    );
}

export default TablePatientsView;