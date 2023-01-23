import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Input, PhoneInput} from "../../UI/Input";
import {useStepsAction, useStepsState} from "../../store/steps/hooks";
import {DropdownInput} from "../../UI/DropdownInput";
import {CloseIcon, PlusIcon} from "../../UI/Svg";

const RowInput = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
`

const RowAddress = styled(RowInput)`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;

  & > div {
    min-width: 220px;

    &:first-child {
      flex: 1;
    }
  }
`

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.green};
    }
  }
`

const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;

    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
`

const DropdownStyled = styled(DropdownInput)`
  width: 100%;
`

const optsCountry: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: 'Country 1',
        value: '0'
    },
    {
        item: 'Country 2',
        value: '1'
    },
]

const optsCity: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: 'City 1',
        value: '0'
    },
    {
        item: 'City 2',
        value: '1'
    },
]
const optsMarital: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: 'Married',
        value: '0'
    },
]

function PatientRegistrationFormView() {
    const [addressIds, setAddressIds] = useState<number[]>([0]);
    const {t} = useTranslation()
    const {form} = useStepsState()
    const {onChange, onDelete} = useStepsAction()
    return (
        <>
            <RowInput>
                <PhoneInput value={form.cellphone} onChange={val => onChange('cellphone', val)} id="cellphone"
                            label={t("contact_info.labels.cellphone") as string}/>
                <PhoneInput value={form.workHome} onChange={val => onChange('workHome', val)} id="work_home"
                            label={t("contact_info.labels.work_home") as string}/>
            </RowInput>
            <RowInput>
                <Input value={form.email} onChange={val => onChange('email', val)}
                       id="email"
                       label={t("contact_info.labels.email") as string}/>
                <PhoneInput value={form.homePhone} onChange={val => onChange('homePhone', val)} id="home_phone"
                            label={t("contact_info.labels.home_phone") as string}/>
            </RowInput>
            <RowInput>
                <DropdownStyled value={form.country} placeholder='' onSelect={val => onChange('country', val)}
                                options={optsCountry} label={t("contact_info.labels.country" as string)}/>
                <DropdownStyled value={form.city} placeholder='' onSelect={val => onChange('city', val)}
                                options={optsCity} label={t("contact_info.labels.city" as string)}/>
            </RowInput>
            {
                addressIds.map((addressId, id) =>
                    <RowAddress key={addressId}>
                        <Input value={form[`zipCode_${addressId}`]}
                               onChange={val => onChange(`zipCode_${addressId}`, val)} id={`zipCode_${addressId}`}
                               label={t("contact_info.labels.zipCode") as string}/>
                        <Input value={form[`address_${addressId}`]}
                               onChange={val => onChange(`address_${addressId}`, val)} id={`address_${addressId}`}
                               label={t("contact_info.labels.address") as string}/>
                        {
                            id === addressIds.length - 1
                                ? <ButtonIcon onClick={() => setAddressIds(prevState => [...prevState, addressId + 1])}>
                                    <PlusIcon/>
                                </ButtonIcon>
                                : <ButtonClose onClick={() => {
                                    setAddressIds(prevState => [...prevState.filter((item) => item !== addressId)])
                                    onDelete(`zipCode_${addressId}`)
                                    onDelete(`address_${addressId}`)
                                }}>
                                    <CloseIcon/>
                                </ButtonClose>
                        }
                    </RowAddress>)
            }
            <RowInput>
                <DropdownStyled value={form.maritalStatus} placeholder=''
                                onSelect={val => onChange('maritalStatus', val)}
                                options={optsMarital} label={t("contact_info.labels.marital_status" as string)}/>
            </RowInput>
        </>
    );
}

export default PatientRegistrationFormView;