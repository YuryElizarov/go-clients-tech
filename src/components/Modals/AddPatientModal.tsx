import React, {ReactNode, useState} from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import {useAppState} from '../../store/app/hooks';
import {CheckBox, Input, PhoneInput} from "../../UI/Input";
import {DropdownInput} from "../../UI/DropdownInput";
import {Button, EButtonVariants} from "../../UI/Button";
import {DateInput} from "../../UI/DateInput";


const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 988px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`

const InputsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  align-content: center;
  justify-content: flex-start;
  gap: 20px;

  & > div {
    width: 100%;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Footer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const ToggleBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

const opts: Array<{ item: string | ReactNode, value: string }> = [
    {
        item: 'Gender 1',
        value: '0'
    },
    {
        item: 'Gender 2',
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


const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 7px;
  }
`

const ButtonStyled = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px 16px;
    font-size: 16px;
  }
`

function AddPatientModal() {
    const {t} = useTranslation()
    const {modals} = useAppState()
    const [data, setData] = useState<{
        first_name: string,
        last_name: string,
        birth: Date | null,
        gender: string,
        email: string,
        provider: string,
        description: string,
        phone: string,
        isEmail: boolean
        isSms: boolean
    }>({
        first_name: '',
        last_name: '',
        birth: null,
        gender: '',
        email: '',
        provider: '',
        description: '',
        phone: '',
        isEmail: false,
        isSms: false,
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }

    if (!modals[EModals.AddPatient]) return null;
    return (
        <Modal modal={EModals.AddPatient} title={t("patients.add.title")}>
            <Content>
                <InputsRow>
                    <Input value={data.first_name} onChange={val => onChange('first_name', val)} id="first_name"
                           label={t("patients.add.labels.first_name") as string}/>
                    <Input value={data.last_name} onChange={val => onChange('last_name', val)} id="last_name"
                           label={t("patients.add.labels.last_name") as string}/>
                </InputsRow>
                <InputsRow>
                    <DateInput value={data.birth} onChange={val => onChange('birth', val)} placeholder=''
                               label={t("patients.add.labels.birth") as string}/>
                    <DropdownInput value={data.gender} onSelect={val => onChange('gender', val)} options={opts}
                                   placeholder=""
                                   label={t("patients.add.labels.gender") as string}/>
                </InputsRow>
                <InputsRow>
                    <Input value={data.email} onChange={val => onChange('email', val)} id="email"
                           label={t("patients.add.labels.email") as string}/>
                    <PhoneInput value={data.phone} onChange={val => onChange('phone', val)} id='phone'/>
                </InputsRow>
                <InputsRow>
                    <DropdownInput value={data.provider} onSelect={val => onChange('provider', val)} options={optProvider}
                                   placeholder=""
                                   label={t("patients.add.labels.provider") as string}/>

                    <Input value={data.description} onChange={val => onChange('description', val)} id="description"
                           label={t("patients.add.labels.description") as string}/>
                </InputsRow>
            </Content>
            <Footer>
                <ToggleBlock>
                    <CheckBox value={data.isEmail}
                              onChange={() => onChange('isEmail', !data.isEmail)}
                              label={t("patients.unsubscribe.labels.email")}/>
                    <CheckBox value={data.isSms}
                              onChange={() => onChange('isSms', !data.isSms)}
                              label={t("patients.unsubscribe.labels.sms")}/>
                </ToggleBlock>

                <Buttons>
                    <ButtonStyled variant={EButtonVariants.Text}>{t("patients.add.buttons.add")}</ButtonStyled>
                    <ButtonStyled variant={EButtonVariants.Default}>{t("patients.add.buttons.save")}</ButtonStyled>
                </Buttons>
            </Footer>
        </Modal>
    );
}

export default AddPatientModal;