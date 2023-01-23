import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Input} from "../../UI/Input";
import InputAutosize from "../../UI/Input/InputAutosize";
import AddPhotoComponent from "./AddPhotoComponent";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 24px;
  }
`


const Inputs = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

function MainDataComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        file: File | null,
        title: string,
        description: string,
    }>({
        file: null,
        title: '',
        description: '',
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <Wrapper>
            <AddPhotoComponent id='logo' onChange={(val) => onChange('file', val)} value={data.file} buttonText={t("constructor.logo.button")} text={t("constructor.logo.text")} />
            <Inputs>
                <Input value={data.title} onChange={val => onChange('title', val)} id="title"
                       label={t("constructor.main.labels.title") as string}/>
                <InputAutosize value={data.description} onChange={val => onChange('description', val)} id="description"
                               label={t("constructor.main.labels.description") as string}/>
            </Inputs>
        </Wrapper>
    );
}

export default MainDataComponent;