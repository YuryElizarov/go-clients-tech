import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {mockPatients} from "../../mock/patients";
import {DeleteIcon, EditIcon, HelpIcon, PatientIcon} from "../../UI/Svg";


const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.background};
  width: 100%;
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
      color: ${({theme}) => theme.colors.gray};
    }

    &:last-child {
    }
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 24px;
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
  a {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.gray};
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

const PatientBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
`

const Icon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.lightBiege};
  svg {
    width: 24px;
    height: 24px;
  }
`
function SubscribeTableView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <th>{t("patients.unsubscribe.headers.patient")}</th>
                    <th>{t("patients.unsubscribe.headers.birth")}</th>
                    <th>{t("patients.unsubscribe.headers.phone")}</th>
                    <th>{t("patients.unsubscribe.headers.email")}</th>
                    <th>{t("patients.unsubscribe.headers.service")}</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {
                    mockPatients.map((item, id) => (
                        <tr key={`Form-${id}`}>
                            <td>
                                <PatientBlock>
                                    <Icon>
                                        <PatientIcon/>
                                    </Icon>
                                    {`${item.name} ${item.soname}`}
                                </PatientBlock>
                            </td>
                            <td>{item.birth}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>
                                {item.viaService && <StatusBlock isOn={!!item.viaService}>
                                    <span/>
                                    {item.viaService}
                                </StatusBlock>}
                            </td>
                            <td>
                                <Actions>
                                    <ButtonIcon><HelpIcon/></ButtonIcon>
                                    <ButtonIcon><Link to='/patients/patient'><EditIcon/></Link></ButtonIcon>
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

export default SubscribeTableView;