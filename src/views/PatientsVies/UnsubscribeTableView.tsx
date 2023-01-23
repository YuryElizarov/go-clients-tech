import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {mockPatients} from "../../mock/patients";
import {PatientIcon} from "../../UI/Svg";
import {Button, EButtonVariants} from "../../UI/Button";
import {CheckBox} from "../../UI/Input";


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

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  border-radius: 5px;
  white-space: nowrap;

  svg {
    path {
      stroke: ${({theme}) => theme.colors.white}
    }
  }
`

function UnsubscribeTableView() {
    const {t} = useTranslation()
    const [data, setData] = useState<{ [id: string]: { isEmail: boolean, isSms: boolean } }>({});

    const onChange = (id: string, key: 'isEmail' | 'isSms', val: boolean) => setData(prevState => {
        if (prevState[id]) {
            return {
                ...prevState,
                [id]: {...prevState[id], [key]: val},
            }
        }
        const newField: { isEmail: boolean, isSms: boolean }= {
            isEmail: false,
            isSms: false,
        }
        newField[key] = val
        return {
            ...prevState,
            [id]: {...newField}
        }

    })
    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <th>{t("patients.unsubscribe.headers.patient")}</th>
                    <th>{t("patients.unsubscribe.headers.birth")}</th>
                    <th>{t("patients.unsubscribe.headers.phone")}</th>
                    <th>{t("patients.unsubscribe.headers.email")}</th>
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
                                <Actions>
                                    <CheckBox value={!!data[id]?.isEmail}
                                              onChange={() => onChange(`${id}`, 'isEmail', !data[id]?.isEmail)}
                                              label={t("patients.unsubscribe.labels.email")}/>
                                    <CheckBox value={!!data[id]?.isSms}
                                              onChange={() => onChange(`${id}`, 'isSms', !data[id]?.isSms)}
                                              label={t("patients.unsubscribe.labels.sms")}/>
                                    <ButtonStyled
                                        variant={EButtonVariants.Default}>{t("patients.unsubscribe.button")}</ButtonStyled>
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

export default UnsubscribeTableView;