import React, {forwardRef, ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import DatePicker from "react-datepicker";
import {CardComponent} from "../../components/UserComponents";
import {Button, EButtonVariants} from "../../UI/Button";
import {Dropdown} from "../../UI/Dropdown";
import logo from '../../assets/images/ClinicLogo.png'
import {ChevronIcon, ChevronRightIcon, UserIcon} from "../../UI/Svg";

const Card = styled(CardComponent)`
  gap: 10px;
  padding: 20px;

  & > div {
    &:first-child {
      margin-bottom: 20px;
      padding: 0;
      border-bottom: none;
    }
  }
`

const Filters = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  gap: 8px;
`

const ButtonStyled = styled(Button)`
  width: fit-content;
  font-size: 16px;
  line-height: 100%;
  padding: 8px 10px;
  border-radius: 5px;
`
const DropdownStyled = styled(Dropdown)`
  border-radius: 5px;
  min-width: 220px;

  & > div:first-child {
    width: 100%;
    padding: 8px;
  }
`

const optService: Array<{ item: string | ReactNode, value: string | number }> = [
    {
        item: 'New Patient',
        value: '0'
    },
    {
        item: 'Existing Patient',
        value: '1'
    },
    {
        item: 'Emergency (or Tooth Pain)',
        value: '2'
    },
    {
        item: 'Invisalign Consultation',
        value: '3'
    },
    {
        item: 'Teeth Whitening Consult',
        value: '4'
    },
    {
        item: 'X-ray / Insurance Follow Up',
        value: '5'
    },
    {
        item: 'Ortho Adjustment',
        value: '6'
    },
    {
        item: 'Braces Consultation',
        value: '7'
    },
]

const Content = styled.div`
  width: 100%;
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: center;
  gap: 20px;

  & > * {
    &:first-child {
      max-width: 425px;
    }
  }
`

const DateStyled = styled.div`
  border: none;
  height: 32px;
  padding: 5px 10px;
  background: ${({theme}) => theme.colors.lightBiege};
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  min-width: 128px;
`

const DateRow = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
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
    width: 24px;
    height: 24px;

    path {
      stroke: ${({theme}) => theme.colors.green};
    }
  }
`

const DateBlock = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  width: 100%;
  max-width: calc(100% / 5);
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.black};
`

const CustomInput = forwardRef(({value, onClick, placeholder}: any, ref: any) => (
    <DateStyled onClick={onClick} ref={ref}>
        {value || placeholder || ''}
    </DateStyled>
))


const RowData = styled(Row)`
  padding: 20px 0;
  align-items: flex-start;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
`


const User = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
`

export const Account = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.lightBiege};
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
`
const Name = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
`

const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
`

const UserInfo = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
  flex-direction: column;
`

const RowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 34px;
`
const RowHours = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 34px;
  gap: 8px;
`

const HourBlock = styled(DateBlock)<{ isDisabled: boolean, isSelected: boolean }>`
  opacity: ${({isDisabled}) => isDisabled ? .6: 1};
  width: 100%;
  max-width: 100%;
  min-height: 32px;
  padding: 8px 16px;
  line-height: 100%;
  border-radius: 5px;
  white-space: nowrap;
  cursor: ${({isDisabled}) => isDisabled ? 'not-allowed': "pointer"};
  background: ${({theme, isSelected}) => theme.colors[isSelected ? 'green' : 'borderInputDefault']};
  color: ${({theme, isSelected}) => theme.colors[isSelected ? 'white' : 'black']};
`

const EmptyHourBlock = styled(HourBlock)`
  cursor: auto;
  background: transparent;
`

EmptyHourBlock.defaultProps = {
    isDisabled: false,
    isSelected: false,
}

const HourColumn = styled.div`
  width: 100%;
  max-width: calc(100% / 5);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 8px; 
`


const userFirst: Array<string[]> = [
    ["9:00 AM", "10:00 AM", "", "12:00 AM", "", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "", "",],
    ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",],
    ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM", "", "", "", "6:00 PM", "7:00 PM", "8:00 PM",],
    ["9:00 AM", "10:00 AM", "", "", "", "", "", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",],
    ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "", "", "", "", "", "", "",],
]

const userSecond: Array<string[]> = [
    ["9:00 AM", "10:00 AM", "", "12:00 AM", "", "2:00 PM",],
    ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM",],
    ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM",],
    ["9:00 AM", "10:00 AM", "", "", "", "2:00 PM",],
    ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 AM", "1:00 PM", "2:00 PM",],
]

function BookingFormView() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        appointment: '',
        date: null | Date,
        selectedTime: string | null
    }>({
        appointment: '',
        date: null,
        selectedTime: null
    });
    const onChange = (key: string, val: any) => {
        console.log(key, val)
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <Card title={t("website.booking_form.title")}
              headerChildren={
                  <Filters>
                      <DropdownStyled isShowOnlyPlaceholder={false} value={data.appointment}
                                      placeholder={t("website.booking_form.labels.select_appointment")}
                                      onSelect={val => onChange('appointment', val)} options={optService} label=""/>
                      <ButtonStyled
                          variant={EButtonVariants.Gray}>{t("website.booking_form.buttons.change_location")}</ButtonStyled>
                  </Filters>
              }
        >
            <Content>
                <Row>
                    <DatePicker
                        selected={data.date}
                        onChange={(date) => onChange("date", date)}
                        placeholderText={t("website.booking_form.labels.date") as string}
                        customInput={<CustomInput/>}
                        dateFormat="MMMM yyyy"
                    />
                    <DateRow>
                        <ButtonIcon><ChevronIcon/></ButtonIcon>
                        <DateBlock>Пн, 22 авг</DateBlock>
                        <DateBlock>Вт, 23 авг</DateBlock>
                        <DateBlock>Ср, 24 авг</DateBlock>
                        <DateBlock>Чт, 25 авг</DateBlock>
                        <DateBlock>Пт, 26 авг</DateBlock>
                        <ButtonIcon><ChevronRightIcon/></ButtonIcon>
                    </DateRow>
                </Row>
                <RowData>
                    <User>
                        <Account>
                            <UserIcon/>
                        </Account>
                        <UserInfo>
                            <Name>Олег Дмитриевич</Name>
                            <Text>Стоматолог</Text>
                        </UserInfo>
                    </User>
                    <RowHours>
                        {
                            userFirst.map((hours, id) => <HourColumn key={`1-${id}`}>
                                {hours.map((hour, hid) => hour
                                    ? <HourBlock key={`1-${id}-${hid}`} onClick={() => {
                                        if ((id + hid) % 3) {
                                            onChange('selectedTime', data.selectedTime === `1-${id}-${hid}` ? null : `1-${id}-${hid}`)
                                        }
                                    }} isSelected={data.selectedTime === `1-${id}-${hid}`} isDisabled={(id + hid) % 3 === 0}>{hour}</HourBlock>
                                    : <EmptyHourBlock isSelected={false} isDisabled={false} key={`1-${id}-${hid}`}/>)}
                            </HourColumn>)
                        }
                    </RowHours>
                </RowData>
                <RowData>
                    <User>
                        <Account>
                            <UserIcon/>
                        </Account>
                        <UserInfo>
                            <Name>Олег Дмитриевич</Name>
                            <Text>Стоматолог</Text>
                        </UserInfo>
                    </User>
                    <RowButton>
                        <ButtonStyled
                            variant={EButtonVariants.Gray}>Запись с 14 сентября 2022</ButtonStyled>
                    </RowButton>
                </RowData>
                <RowData>
                    <User>
                        <Account>
                            <UserIcon/>
                        </Account>
                        <UserInfo>
                            <Name>Олег Дмитриевич</Name>
                            <Text>Стоматолог</Text>
                        </UserInfo>
                    </User>
                    <RowHours>
                        {
                            userSecond.map((hours, id) => <HourColumn key={`2-${id}`}>
                                {hours.map((hour, hid) => hour
                                    ? <HourBlock onClick={() => {
                                        if ((id + hid) % 3) {
                                            onChange('selectedTime', data.selectedTime === `2-${id}-${hid}` ? null : `2-${id}-${hid}`)
                                        }
                                    }} key={`2-${id}-${hid}`} isSelected={data.selectedTime === `2-${id}-${hid}`} isDisabled={(id + hid) % 3 === 0}>{hour}</HourBlock>
                                    : <EmptyHourBlock isSelected={false} isDisabled={false} key={`2-${id}-${hid}`}/>)}
                            </HourColumn>)
                        }
                    </RowHours>
                </RowData>
                <RowData>
                    <User>
                        <Account>
                            <img src={logo} alt=""/>
                        </Account>
                        <UserInfo>
                            <Name>Москва, Красногвардейская 40</Name>
                            <Text>Локация</Text>
                        </UserInfo>
                    </User>
                    <RowButton>
                        <ButtonStyled
                            variant={EButtonVariants.Gray}>{t("website.booking_form.buttons.select_location")}</ButtonStyled>
                    </RowButton>
                </RowData>
            </Content>
        </Card>
    );
}

export default BookingFormView;