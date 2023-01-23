import React, {forwardRef, useState} from 'react';
import styled from "styled-components";
import DatePicker from "react-datepicker";
import {useTranslation} from "react-i18next";
import {CheckBox} from "../../UI/Input";
import {DeleteIcon, EditIcon, EyeIcon} from "../../UI/Svg";
import {MoreAction} from "../../UI/MoreAction";

const Row = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0;
  align-items: center;
  align-content: center;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  justify-content: space-between;
  &:last-child {
    border-bottom: none;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 0;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    gap: 8px;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 15px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
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
  min-width: 140px;
  min-height: 32px;
  background: ${({theme}) => theme.colors.lightBiege};
  border-radius: 5px;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`
const CustomInput = forwardRef(({value, onClick, placeholder}: any, ref: any) => (
    <DateInputStyled onClick={onClick} ref={ref}>
        {value || placeholder || ''}
    </DateInputStyled>
))

function RowDayInput({title}:{title: string}) {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        isChecked: boolean
        dateFrom: Date | null
        dateTo: Date | null
    }>({
        isChecked: false,
        dateFrom: null,
        dateTo: null,
    });
    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <Row>
            <Left>
                <CheckBox value={data.isChecked} onChange={() => onChange('isChecked', !data.isChecked)} id=''/>
                {title}
            </Left>
            <Right>

                <InputWrapper>
                    <Label>{t("constructor.work_time.labels.from")}</Label>
                    <DatePicker
                        disabled={!data.isChecked}
                        selected={data.dateFrom}
                        onChange={(date) => onChange('dateFrom', date)}
                        showTimeSelect
                        showTimeSelectOnly
                        placeholderText={t("constructor.work_time.labels.from") as string}
                        timeIntervals={15}
                        timeCaption="Time"
                        customInput={<CustomInput/>}
                        dateFormat="hh:mm aa"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>{t("constructor.work_time.labels.to")}</Label>
                    <DatePicker
                        disabled={!data.isChecked}
                        selected={data.dateTo}
                        onChange={(date) => onChange('dateTo', date)}
                        showTimeSelect
                        showTimeSelectOnly
                        placeholderText={t("constructor.work_time.labels.to") as string}
                        timeIntervals={15}
                        timeCaption="Time"
                        customInput={<CustomInput/>}
                        dateFormat="hh:mm aa"
                    />
                </InputWrapper>
                <MoreAction
                    actions={[
                        {
                            title: <><EditIcon/> {t("booking.doctors.actions.edit")}</>,
                            callback: () => {
                            }
                        },
                        {
                            title: <><EyeIcon/> {t("booking.doctors.actions.visible")}</>,
                            callback: () => {
                            }
                        },
                        {
                            title: <><DeleteIcon/> {t("booking.doctors.actions.delete")}</>,
                            callback: () => {
                            }
                        }
                    ]}
                />
            </Right>
        </Row>
    );
}

export default RowDayInput;