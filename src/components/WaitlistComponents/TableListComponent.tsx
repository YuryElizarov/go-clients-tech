import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {DeleteIcon, EditIcon, HelpIcon} from "../../UI/Svg";
import {IWaitlistItem} from "../../types";

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
    }

    &:last-child {
    }
  }
  tbody tr {
    border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
    &:last-child{
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
      color: ${({theme}) => theme.colors.gray};
    }

    &:last-child {
    }
  }
`

const Provider = styled.td<{ isDisabled: boolean }>`
  color: ${({theme, isDisabled}) => theme.colors[isDisabled ? 'gray' : 'black']};
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 24px;
  ${({theme}) => theme.mediaQueries.ll}{
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
  }
`

function TableListComponent({data}:{data: IWaitlistItem[]}) {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <th>{t("waitlist.table.header.num")}</th>
                    <th>{t("waitlist.table.header.provider")}</th>
                    <th>{t("waitlist.table.header.app_time")}</th>
                    <th>{t("waitlist.table.header.recipient")}</th>
                    <th>{t("waitlist.table.header.openrate")}</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item, id) => (<tr key={`Row-${id}`}>
                        <td>{item.num}</td>
                        <Provider isDisabled={!!item.provider}>{item.provider}</Provider>
                        <td>{item.app_time}</td>
                        <td>{item.recipient}</td>
                        <td>{item.openrate}</td>
                        <td>
                            <Actions>
                                <ButtonIcon><HelpIcon/></ButtonIcon>
                                <ButtonIcon><EditIcon/></ButtonIcon>
                                <ButtonIcon><DeleteIcon/></ButtonIcon>
                            </Actions>
                        </td>
                    </tr>))
                }
                </tbody>
            </Table>
        </Wrapper>
    );
}

export default TableListComponent;