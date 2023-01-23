import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {Dropdown} from "../../UI/Dropdown";
import {ChevronIcon, ChevronRightIcon} from "../../UI/Svg";
import {FiltersComponent} from "../../components/CalendarComponents";
import {useCalendarAction, useCalendarState} from "../../store/calendar/hooks";
import {EDuration} from "../../store/calendar/types";

const Header = styled.div`
  width: 100%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 20px;
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
  white-space: nowrap;
`

const HeadingGray = styled(HeadingStyled)`
  color: ${({theme}) => theme.colors.gray};
`

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 16px;
`
const DropdownStyled = styled(Dropdown)`
  border-radius: 5px;
  width: fit-content;
  min-width: 100px;

  & > div:first-child {
    padding: 8px;
  }
`
const ChevronsBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 8px;
`

const ChevronButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  svg {
    width: 24px; 
    height: 24px;
    path {
      stroke: ${({theme}) => theme.colors.green};
    }
  }
`

const opts: Array<{ item: string | ReactNode, value: string | number }> = [
    {
        item: 'День',
        value: EDuration.Day
    },
    {
        item: 'Неделя',
        value: EDuration.Week
    },
    {
        item: 'Месяц',
        value: EDuration.Month
    },
    {
        item: 'Год',
        value: EDuration.Year
    },
]

function HeaderView() {
    const {selectedDuration} = useCalendarState()
    const {onSelectDuration} = useCalendarAction()
    const {t} = useTranslation()
    return (
        <Header>
            <Left>
                <HeadingStyled as='h2'>{t("calendar.title")}</HeadingStyled>
                <DropdownStyled isShowOnlyPlaceholder={false} value={selectedDuration} placeholder=''
                                onSelect={val => onSelectDuration(val)} options={opts} label=""/>
                <ChevronsBlock>
                    <ChevronButton><ChevronIcon/></ChevronButton>
                    <ChevronButton><ChevronRightIcon/></ChevronButton>
                </ChevronsBlock>
                <HeadingStyled as='h2'>
                    {selectedDuration === EDuration.Day && `Воскресение 13 августа 2022`}
                    {selectedDuration === EDuration.Week && `22 - 28 августа 2022`}
                    {selectedDuration === EDuration.Month && `Август 2022`}
                    {selectedDuration === EDuration.Year && `2022`}
                </HeadingStyled>
                {selectedDuration === EDuration.Year && <HeadingGray as='h2'>236 тысяч записей</HeadingGray>}
            </Left>
            <FiltersComponent/>
        </Header>
    );
}

export default HeaderView;