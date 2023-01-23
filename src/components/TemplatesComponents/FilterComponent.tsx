import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Dropdown} from "../../UI/Dropdown";


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 7px;
  }
`


const DropdownStyled = styled(Dropdown)`
  border-radius: 5px;
  min-width: 140px;

  & > div:first-child {
    padding: 8px;
    background: ${({theme}) => theme.colors.borderInputDefault};
  }
`


const optProviders: Array<{ item: string | ReactNode, value: string | number }> = [
    {
        item: 'Provider 1',
        value: '0'
    },
    {
        item: 'Provider 2',
        value: '1'
    },
    {
        item: 'Provider 3',
        value: '2'
    },
]
const optDate: Array<{ item: string | ReactNode, value: string | number }> = [
    {
        item: 'From 1 to 1',
        value: '0'
    },
    {
        item: 'From 1 to 2',
        value: '1'
    },
    {
        item: 'From 1 to 3',
        value: '2'
    },
]
function FilterComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        operator: string
    }>({
        operator: ''
    });
    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <Wrapper>
            <DropdownStyled isShowOnlyPlaceholder={false} value={data.operator} placeholder={t("templates.perfomance.filters.providers")}
                            onSelect={val => onChange('operator', val)} options={optProviders} label=""/>
            <DropdownStyled isShowOnlyPlaceholder={false} value={data.operator} placeholder={t("templates.perfomance.filters.date")}
                            onSelect={val => onChange('operator', val)} options={optDate} label=""/>
        </Wrapper>
    );
}

export default FilterComponent;