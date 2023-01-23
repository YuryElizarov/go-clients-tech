import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {DeleteIcon, EditIcon, LaptopIcon, QrcodeIcon, SmartphoneIcon} from "../../UI/Svg";
import {mockTemplates} from "../../mock/templates";

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
`

function TemplatesTableView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <th>{t("templates.headers.status")}</th>
                    <th>{t("templates.headers.title")}</th>
                    <th>{t("templates.headers.total_sent")}</th>
                    <th>{t("templates.headers.recipients")}</th>
                    <th>{t("templates.headers.updated")}</th>
                    <th>{t("templates.headers.create_date")}</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {
                    mockTemplates.map((item, id) => (
                        <tr key={`Form-${id}`}>
                            <td>
                                <Access>
                                    <WrapperIcon isActive={item.status.desctop}><LaptopIcon/></WrapperIcon>
                                    <WrapperIcon isActive={item.status.mobile}><SmartphoneIcon/></WrapperIcon>
                                </Access>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.total_sent}</td>
                            <td>{item.recipients}</td>
                            <td>
                                <DateBlock>
                                    {item.create_date.date}
                                    <span>{item.create_date.user.name} {item.create_date.user.soname}</span>
                                </DateBlock>
                            </td>
                            <td>
                                <DateBlock>
                                    {item.updated.date}
                                    <span>{item.updated.user.name} {item.updated.user.soname}</span>
                                </DateBlock>
                            </td>
                            <td>
                                <Actions>
                                    <ButtonIcon><QrcodeIcon/></ButtonIcon>
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

export default TemplatesTableView;