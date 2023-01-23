import React, {forwardRef, ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import DatePicker from "react-datepicker";
import {CardComponent} from "../../components/UserComponents";
import {Button, EButtonVariants} from "../../UI/Button";
import {DropdownInput} from "../../UI/DropdownInput";
import {AddressComponent} from "../../components/WebsiteComponents";
import {CalendarIcon} from "../../UI/Svg";
import CalendarComponent from "../../components/WebsiteComponents/CalendarComponent";
import HoursComponent from "../../components/WebsiteComponents/HoursComponent";

const Card = styled(CardComponent)`
  gap: 10px;
  padding: 20px;

  .react-datepicker-wrapper {
    width: unset;
  }

  & > div {
    &:first-child {
      width: 100%;
      margin-bottom: 20px;
      padding: 0;
      border-bottom: none;
    }
  }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
`

const ButtonStyled = styled(Button)`
  width: 100%;
  max-width: unset;
  font-size: 20px;
  line-height: 100%;
  padding: 15px 20px;
  border-radius: 10px;
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

const DropdownInputStyled = styled(DropdownInput)`
  width: 100%;
`

const CustomInput = forwardRef(({value, onClick, placeholder}: any, ref: any) => (
    <DateStyled onClick={onClick} ref={ref}>
        {value || placeholder || ''}
    </DateStyled>
))

const optService: Array<{ item: string | ReactNode, value: string | number }> = [
    {
        item: 'Узи брюшной полости',
        value: '0'
    },
    {
        item: 'Узи брюшной полости',
        value: '1'
    },
]

function BookingView() {
    const [data, setData] = useState<{
        date: Date | null
        service: string
    }>({
        date: null,
        service: ''
    });
    const {t} = useTranslation()
    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <Card title={t("website.doctor.booking")}
              headerChildren={
                  <DatePicker
                      selected={data.date}
                      onChange={(date) => onChange("date", date)}
                      placeholderText={t("website.doctor.date") as string}
                      customInput={<CustomInput/>}
                      dateFormat="MMMM yyyy"
                  />
              }
        >
            <Content>
                <DropdownInputStyled value={data.service} onSelect={val => onChange('service', val)}
                                     options={optService}
                                     placeholder=""
                                     label={t("website.doctor.service") as string}/>
                <AddressComponent buttonName='website.doctor.change_location' onClick={() => {}} buttonVariant={EButtonVariants.Gray}/>
                {data.date && <CalendarComponent date={data.date}/>}
                <HoursComponent/>
                <ButtonStyled variant={EButtonVariants.Default}>
                    <CalendarIcon/> {t("website.doctor.button_booking")}
                </ButtonStyled>
            </Content>
        </Card>
    );
}

export default BookingView;