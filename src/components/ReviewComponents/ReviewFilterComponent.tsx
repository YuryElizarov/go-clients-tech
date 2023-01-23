import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Dropdown} from "../../UI/Dropdown";
import {CheckBox} from "../../UI/Input";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 24px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 20px;
  }
`

const opts: Array<{item: string, value: string}> = [
]

function ReviewFilterComponent() {
    const {t} = useTranslation()
    const [filters, setFilters] = useState<{
        select: string,
        noAnswer: boolean,
        noText: boolean
    }>({
        select: '',
        noAnswer: false,
        noText: false
    });

    const onChange = (key: string, val: string | boolean) => {
        setFilters(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    return (
        <Wrapper>
            <CheckBox value={filters.noText} onChange={() => onChange('noText', !filters.noText)} id='no-text' label={t('reviews.filter.no_text') as string}/>
            <CheckBox value={filters.noAnswer} onChange={() => onChange('noAnswer', !filters.noAnswer)} id='no-answer' label={t('reviews.filter.no_answer') as string}/>
            <Dropdown isShowOnlyPlaceholder={false} value={filters.select} placeholder={t('reviews.filter.select', {count: 76})}
                      onSelect={v => onChange('select', v)} options={opts} label=""/>
        </Wrapper>
    );
}

export default ReviewFilterComponent;