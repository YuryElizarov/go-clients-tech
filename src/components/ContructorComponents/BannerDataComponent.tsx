import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Input} from "../../UI/Input";
import {Toggle} from "../../UI/Toggle";
import {LinkSecondIcon} from "../../UI/Svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const ToggleBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`

const ToggleLabel = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.black};
  svg {
    width: 16px;
    height: 16px;
    path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    gap: 10px;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

function BannerDataComponent() {
    const {t} = useTranslation()
    const [data, setData] = useState<{
        header: string,
        description: string,
        isButton: boolean,
    }>({
        header: '',
        description: '',
        isButton: false,
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <Wrapper>

            <Input value={data.header} onChange={val => onChange('header', val)} id="header"
                   label={t("constructor.banner.labels.header") as string}/>

            <Input value={data.description} onChange={val => onChange('description', val)} id="description"
                   label={t("constructor.banner.labels.description") as string}/>
            <ToggleBlock>
                <ToggleLabel>
                    <LinkSecondIcon/> {t("constructor.banner.labels.is_button") as string}
                </ToggleLabel>
                <Toggle isActive={data.isButton} onToggle={() => onChange('isButton', !data.isButton)}/>
            </ToggleBlock>
        </Wrapper>
    );
}

export default BannerDataComponent;