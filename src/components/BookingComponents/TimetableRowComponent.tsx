import React, {forwardRef, ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import DatePicker from 'react-datepicker'
import {Multiselect} from "../../UI/Multiselect";
import {Dropdown} from "../../UI/Dropdown";
import {CalendarIcon, DeleteIcon} from "../../UI/Svg";
import "react-datepicker/dist/react-datepicker.css";
import {Toggle} from "../../UI/Toggle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 20px;
  gap: 30px;
  background: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 5px;
  width: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 24px;
  }
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 7px;
  height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const DropdownStyled = styled(Dropdown)`
  border-radius: 5px;
  width: 100%;

  & > div:first-child {
    padding: 8px;
  }
`

const FormColumn = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  flex: 1;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 10px;
  }
`

const Label = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const DateInputStyled = styled.div`
  padding: 8px 10px;
  gap: 4px;
  min-height: 32px;
  background: ${({theme}) => theme.colors.lightBiege};
  border-radius: 5px;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    padding: 6px 8px;
  }
`

const ButtonIcon = styled.button`
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`

const options: Array<{ item: string, shortItem: string, value: string }> = [
    {
        item: 'Monday',
        shortItem: 'MON',
        value: 'Monday'
    },
    {
        item: 'Tuesday',
        shortItem: 'TU',
        value: 'Tuesday'
    },
    {
        item: 'Wednesday',
        shortItem: 'WE',
        value: 'Wednesday'
    },
    {
        item: 'Thursday',
        shortItem: 'THU',
        value: 'Thursday '
    },
    {
        item: 'Friday',
        shortItem: 'FRI',
        value: 'Friday'
    },
    {
        item: 'Saturday',
        shortItem: 'SAT',
        value: 'Saturday'
    },
    {
        item: 'Sunday',
        shortItem: 'SUN',
        value: 'Sunday '
    },
]
const optOperatory: Array<{ item: string | ReactNode, value: string | number }> = [
    {
        item: 'Anna Li4',
        value: '0'
    },
    {
        item: 'Anna Li4',
        value: '1'
    },
    {
        item: 'Anna Li4',
        value: '2'
    },
    {
        item: 'Anna Li4',
        value: '3'
    },
]


const CustomInput = forwardRef(({value, onClick, placeholder}: any, ref: any) => (
    <DateInputStyled onClick={onClick} ref={ref}>
        {value || placeholder || ''}
    </DateInputStyled>
))

function TimetableRowComponent() {
    const {t} = useTranslation()
    const [days, setDays] = useState('');
    const [data, setData] = useState<{
        operator: string
        dateFrom: Date | null,
        dateTo: Date | null,
        isOperatory: boolean,
        isCustomRepeat: boolean,
    }>({
        operator: optOperatory[0].value as string,
        dateFrom: null,
        dateTo: null,
        isOperatory: false,
        isCustomRepeat: false,
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    return (
        <Wrapper>
            <FormColumn>
                <Multiselect value={days} placeholder={t("booking.timetable.days")} options={options}
                             label={t("booking.timetable.days")}
                             onSelect={(val) => setDays(val)} customIcon={<CalendarIcon width={16} height={16}/>}/>
                <InputWrapper>
                    <Label>{t("booking.timetable.labels.operatory")}</Label>
                    <DropdownStyled isShowOnlyPlaceholder={false} value={data.operator} placeholder={t("booking.timetable.labels.operatory")}
                                    onSelect={val => onChange('operator', val)} options={optOperatory} label=""/>
                </InputWrapper>
            </FormColumn>
            <FormColumn>
                <InputWrapper>
                    <Label>{t("booking.timetable.labels.from")}</Label>
                    <DatePicker
                        selected={data.dateFrom}
                        onChange={(date) => onChange('dateFrom', date)}
                        showTimeSelect
                        placeholderText={t("booking.timetable.labels.from") as string}
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        customInput={<CustomInput/>}
                        dateFormat="hh:mm aa"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>{t("booking.timetable.labels.operatory")}</Label>
                    <Toggle isActive={data.isOperatory} onToggle={() => onChange('isOperatory', !data.isOperatory)}/>
                </InputWrapper>
            </FormColumn>
            <FormColumn>
                <InputWrapper>
                    <Label>{t("booking.timetable.labels.to")}</Label>
                    <DatePicker
                        selected={data.dateTo}
                        onChange={(date) => onChange('dateTo', date)}
                        showTimeSelect
                        showTimeSelectOnly
                        placeholderText={t("booking.timetable.labels.to") as string}
                        timeIntervals={15}
                        timeCaption="Time"
                        customInput={<CustomInput/>}
                        dateFormat="hh:mm aa"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>{t("booking.timetable.labels.custom_repeat")}</Label>
                    <Toggle isActive={data.isCustomRepeat}
                            onToggle={() => onChange('isCustomRepeat', !data.isCustomRepeat)}/>
                </InputWrapper>
            </FormColumn>
            <ButtonIcon>
                <DeleteIcon/>
            </ButtonIcon>
        </Wrapper>
    );
}

export default TimetableRowComponent;