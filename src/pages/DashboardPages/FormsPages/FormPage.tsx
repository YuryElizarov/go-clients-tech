import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {DeleteIcon, LaptopIcon, QrcodeIcon, SmartphoneIcon, WaitlistIcon} from "../../../UI/Svg";
import {useFormsState} from "../../../store/forms/hooks";

const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.background};
  padding: 0 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
`
const Table = styled.table`
  width: 100%;
  border-spacing: 20px;

  thead {
  }

  tbody tr {
    border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
    &:last-child{
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

const Access = styled(Actions)`
  gap: 8px;
  justify-content: flex-start;
`

const WrapperIcon = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme, isActive}) => theme.colors[isActive ? 'green' : 'grayC4']};
    }
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
`

function FormPage() {
    const {t} = useTranslation()
    const {forms} = useFormsState()
    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <th>{t("forms.forms.headers.access")}</th>
                    <th>{t("forms.forms.headers.title")}</th>
                    <th>{t("forms.forms.headers.send")}</th>
                    <th>{t("forms.forms.headers.submitted")}</th>
                    <th>{t("forms.forms.headers.create_date")}</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {
                    forms.map((item, id) => (
                        <tr key={`Form-${id}`}>
                            <td>
                                <Access>
                                    <WrapperIcon isActive={item.access.desctop}><LaptopIcon/></WrapperIcon>
                                    <WrapperIcon isActive={item.access.mobile}><SmartphoneIcon/></WrapperIcon>
                                </Access>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.send}</td>
                            <td>{item.submitted}</td>
                            <td>{item.create_date}</td>
                            <td>
                                <Actions>
                                    <ButtonIcon><QrcodeIcon/></ButtonIcon>
                                    <ButtonIcon><WaitlistIcon/></ButtonIcon>
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

export default FormPage;