import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Input, PhoneInput} from "../../UI/Input";
import {StarIcon} from "../../UI/Svg";
import {Toggle} from "../../UI/Toggle";

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


const ToggleBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  padding: 20px 0;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 0;
    gap: 12px;
  }
`

const LabelBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};

  span {
    color: ${({theme}) => theme.colors.gray};
  }

  svg {
    width: 16px;
    height: 16px;

    path {
      fill: none;
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 10px;
    font-size: 12px;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

function AddEmployeeComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        full_name: string
        email: string
        phone: string
        location: string
        description: string
        isAdmin: boolean
    }>({
        full_name: '',
        email: '',
        phone: '',
        description: '',
        location: '',
        isAdmin: false
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
                       label={t("user.add_employee.data.labels.full_name") as string}/>
                <Input value={data.email} onChange={val => onChange('email', val)} id="email"
                       label={t("user.add_employee.data.labels.email") as string}/>
            </InputsRow>

            <InputsRow>
                <PhoneInput value={data.phone} onChange={val => onChange('phone', val)} id="phone"/>
                <Input value={data.location} onChange={val => onChange('location', val)} id="location"
                       label={t("user.add_employee.data.labels.location") as string}/>
            </InputsRow>
            <Input value={data.description} onChange={val => onChange('description', val)} id="description"
                   label={t("user.add_employee.data.labels.description") as string}/>
            <ToggleBlock>
                <LabelBlock>
                    <StarIcon/>
                    <div>{t("user.add_employee.data.labels.toggle_before") as string} <span>{t("user.add_employee.data.labels.toggle_after") as string}</span>
                    </div>
                </LabelBlock>
                <Toggle isActive={data.isAdmin} onToggle={() => onChange('isAdmin', !data.isAdmin)}/>
            </ToggleBlock>
        </Wrapper>
    );
}

export default AddEmployeeComponent;