import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Dropdown} from "../../UI/Dropdown";
import {Button, EButtonVariants} from "../../UI/Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 6px 8px;
    font-size: 12px;
  }
`

const optsFilters: Array<{item: string, value: string}> = [
]
const optsDate: Array<{item: string, value: string}> = [
]
function PatientsFilterComponent() {

    const {t} = useTranslation()
    const [filters, setFilters] = useState<{
        select: string,
        date: string,
    }>({
        select: '',
        date: '',
    });

    const onChange = (key: string, val: string | boolean) => {
        setFilters(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <Wrapper>
            <Dropdown isShowOnlyPlaceholder={false} value={filters.select} placeholder={t('booking.patients.filters.filter')}
                      onSelect={v => onChange('select', v)} options={optsFilters} label=""/>
            <Dropdown isShowOnlyPlaceholder={false} value={filters.date} placeholder={t('booking.patients.filters.date')}
                      onSelect={v => onChange('date', v)} options={optsDate} label=""/>
            <ButtonStyled variant={EButtonVariants.Default}>{t('booking.patients.filters.export')}</ButtonStyled>
        </Wrapper>
    );
}

export default PatientsFilterComponent;