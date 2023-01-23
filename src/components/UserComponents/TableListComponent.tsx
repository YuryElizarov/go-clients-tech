import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {DeleteIcon, EditIcon, HelpIcon, MapIcon} from "../../UI/Svg";
import {mockPersonal} from "../../mock/profile";

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

  tbody tr {
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
    ${({theme}) => theme.mediaQueries.ll} {
      padding: 20px 0;
    }

    &:first-child {
      padding-left: 20px;
      color: ${({theme}) => theme.colors.gray};
    }

    &:last-child {
      padding-right: 20px;
    }
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

const LocationList = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;  
  }
`

const Location = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 7px;
  svg {
    width: 16px;
    height: 16px;
    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

function TableListComponent() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Table>
                <thead>
                <tr>
                    <th>{t("user.personal.headers.num")}</th>
                    <th>{t("user.personal.headers.name")}</th>
                    <th>{t("user.personal.headers.cellphone")}</th>
                    <th>{t("user.personal.headers.email")}</th>
                    <th>{t("user.personal.headers.location")}</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {
                    mockPersonal.map((item, id) => (
                        <tr key={`Row-${id}`}>
                            <td>{item.num}</td>
                            <td><LinkStyled to='/'>{item.name} {item.soname}</LinkStyled></td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>
                                <LocationList>
                                    {
                                        item.location.map((location, lid) => (
                                            <Location key={`${id}-${lid}`}>
                                                <MapIcon/>
                                                {location}
                                            </Location>
                                        ))
                                    }
                                </LocationList>
                            </td>
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