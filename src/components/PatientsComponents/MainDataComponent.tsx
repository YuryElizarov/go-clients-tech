import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {UserIcon} from "../../UI/Svg";
import {Input, PhoneInput} from "../../UI/Input";
import {DateInput} from "../../UI/DateInput";
import {DropdownInput} from "../../UI/DropdownInput";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
`

const ImageBlock = styled.div`
  min-width: 233px;
  width: 233px;
  height: 233px;
  overflow: hidden;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: #F8F8F8;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};

  img {
    width: 100%;
    height: auto;
  }

  svg {
    width: 80px;
    height: 80px;

    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
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
`

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 25px;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 16px 16px 20px;
    gap: 16px;
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

function MainDataComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        first_name: string,
        last_name: string,
        birth: Date | null,
        gender: string,
        email: string,
        phone: string,
    }>({
        first_name: 'Геннадий',
        last_name: 'Олегов',
        birth: new Date(463726817000),
        gender: '0',
        email: 'example@mail.com',
        phone: '+7 (000) 000 00-00',
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <Wrapper>
            <ImageBlock>
                <UserIcon/>
            </ImageBlock>
            <Form>
                <InputsRow>
                    <Input value={data.first_name} onChange={val => onChange('first_name', val)} id="first_name"
                           label={t("patients.add.labels.first_name") as string}/>
                    <Input value={data.last_name} onChange={val => onChange('last_name', val)} id="last_name"
                           label={t("patients.add.labels.last_name") as string}/>
                </InputsRow>
                <InputsRow>
                    <Input value={data.email} onChange={val => onChange('email', val)} id="email"
                           label={t("patients.add.labels.email") as string}/>
                    <PhoneInput value={data.phone} onChange={val => onChange('phone', val)} id='phone'/>
                </InputsRow>
                <InputsRow>
                    <DateInput value={data.birth} onChange={val => onChange('birth', val)} placeholder=''
                               label={t("patients.add.labels.birth") as string}/>
                    <DropdownInput value={data.gender} onSelect={val => onChange('gender', val)} options={opts}
                                   placeholder=""
                                   label={t("patients.add.labels.gender") as string}/>
                </InputsRow>
            </Form>
        </Wrapper>
    );
}

export default MainDataComponent;