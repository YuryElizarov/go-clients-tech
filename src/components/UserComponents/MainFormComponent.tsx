import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Button, EButtonVariants} from "../../UI/Button";
import {Input, PhoneInput} from "../../UI/Input";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
    padding: 16px;
  }
`

const Buttons = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`

const FooterButton = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  gap: 10px;
  white-space: nowrap;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll}{
    padding: 12px 16px;
    gap: 8px;
    font-size: 16px;
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
    font-size: 16px;
  }
`

function MainFormComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        full_name: string
        email: string
        phone: string
        location: string
        description: string
    }>({
        full_name: '',
        email: '',
        phone: '',
        description: '',
        location: '',
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <Wrapper>
            <InputsRow>
                <Input value={data.full_name} onChange={val => onChange('full_name', val)} id="full_name"
                       label={t("user.person_data.data.labels.full_name") as string}/>
                <Input value={data.email} onChange={val => onChange('email', val)} id="email"
                       label={t("user.person_data.data.labels.email") as string}/>
            </InputsRow>

            <InputsRow>
                <PhoneInput value={data.phone} onChange={val => onChange('phone', val)} id="phone"/>
                <Input value={data.location} onChange={val => onChange('location', val)} id="location"
                       label={t("user.person_data.data.labels.location") as string}/>
            </InputsRow>
            <Input value={data.description} onChange={val => onChange('description', val)} id="description"
                   label={t("user.person_data.data.labels.description") as string}/>
            <Buttons>
                <FooterButton
                    variant={EButtonVariants.Text}>{t('user.person_data.data.buttons.cancel')}</FooterButton>
                <FooterButton
                    variant={EButtonVariants.Default}>{t('user.person_data.data.buttons.save')}</FooterButton>
            </Buttons>
        </Wrapper>
    );
}

export default MainFormComponent;