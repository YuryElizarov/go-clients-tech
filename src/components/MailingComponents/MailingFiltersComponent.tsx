import React, {forwardRef, ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import DatePicker from "react-datepicker";
import {CalendarIcon} from "../../UI/Svg";
import {Dropdown} from "../../UI/Dropdown";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 20px;
  gap: 30px;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 24px;
  }
`

const Block = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`

const BlockTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll}{
    font-size: 12px;
  }
`

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;
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
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 7px;
  width: 100%;
  & > div {
    display: flex;
    width: unset;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
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
  width: 180px;
  color: ${({theme}) => theme.colors.black};
  position: relative;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 6px 8px;
    min-height: 26px;
    font-size: 12px;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
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

const CustomInput = forwardRef(({value, onClick, placeholder}: any, ref: any) => (
    <DateInputStyled onClick={onClick} ref={ref}>
        {value || placeholder || ''}
        <IconWrapper>
            <CalendarIcon/>
        </IconWrapper>
    </DateInputStyled>
))

const optAge: Array<{ item: string | ReactNode, value: string | number }> = [
    {
        item: 'Age 1',
        value: '0'
    },
    {
        item: 'Age 2',
        value: '1'
    },
]
const optProvider: Array<{ item: string | ReactNode, value: string | number }> = [
    {
        item: 'Provider 1',
        value: '0'
    },
    {
        item: 'Provider 2',
        value: '1'
    },
]

const DropdownStyled = styled(Dropdown)`
  border-radius: 5px;
  width: 100%;

  & > div:first-child {
    padding: 8px;
  }
`
function MailingFiltersComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        dateAfter: Date | null,
        dateBefore: Date | null,
        appointmentAfter: Date | null,
        appointmentBefore: Date | null,
        age: string
        provider: string
    }>({
        age: '',
        provider: '',
        dateAfter: null,
        dateBefore: null,
        appointmentAfter: null,
        appointmentBefore: null,
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    return (
        <Wrapper>
            <Block>
                <BlockTitle>{t("mailing.select_mailing.filter_block.date")}</BlockTitle>
                <InputBlock>
                    <InputWrapper>
                        <Label>{t("mailing.select_mailing.labels.after")}</Label>
                        <DatePicker
                            selected={data.dateAfter}
                            onChange={(date) => onChange('dateAfter', date)}
                            placeholderText={t("mailing.select_mailing.labels.choose_date") as string}
                            customInput={<CustomInput/>}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Label>{t("mailing.select_mailing.labels.before")}</Label>
                        <DatePicker
                            selected={data.dateBefore}
                            onChange={(date) => onChange('dateBefore', date)}
                            placeholderText={t("mailing.select_mailing.labels.choose_date") as string}
                            customInput={<CustomInput/>}
                        />
                    </InputWrapper>
                </InputBlock>
            </Block>
            <Block>
                <BlockTitle>{t("mailing.select_mailing.filter_block.appointment")}</BlockTitle>
                <InputBlock>
                    <InputWrapper>
                        <Label>{t("mailing.select_mailing.labels.after")}</Label>
                        <DatePicker
                            selected={data.appointmentAfter}
                            onChange={(date) => onChange('appointmentAfter', date)}
                            placeholderText={t("mailing.select_mailing.labels.choose_date") as string}
                            customInput={<CustomInput/>}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Label>{t("mailing.select_mailing.labels.before")}</Label>
                        <DatePicker
                            selected={data.appointmentBefore}
                            onChange={(date) => onChange('appointmentBefore', date)}
                            placeholderText={t("mailing.select_mailing.labels.choose_date") as string}
                            customInput={<CustomInput/>}
                        />
                    </InputWrapper>
                </InputBlock>
            </Block>
            <Block>
                <BlockTitle>{t("mailing.select_mailing.filter_block.list")}</BlockTitle>
                <InputWrapper>
                    <Label>{t("mailing.select_mailing.labels.age")}</Label>
                    <DropdownStyled isShowOnlyPlaceholder={false} value={data.age} placeholder={t("mailing.select_mailing.labels.choose_range")}
                                    onSelect={val => onChange('age', val)} options={optAge} label=""/>
                </InputWrapper>
                <InputWrapper>
                    <Label>{t("mailing.select_mailing.labels.providers")}</Label>
                    <DropdownStyled isShowOnlyPlaceholder={false} value={data.provider} placeholder={t("mailing.select_mailing.labels.choose_providers")}
                                    onSelect={val => onChange('provider', val)} options={optProvider} label=""/>
                </InputWrapper>
            </Block>
        </Wrapper>
    );
}

export default MailingFiltersComponent;