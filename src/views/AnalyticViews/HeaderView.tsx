import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {Dropdown} from "../../UI/Dropdown";
import {ChevronIcon, ChevronRightIcon} from "../../UI/Svg";
import {SettingComponent} from "../../components/AnalyticComponents";

const Header = styled.div`
  width: 100%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
  white-space: nowrap;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`
const DropdownStyled = styled(Dropdown)`
  border-radius: 5px;
  width: fit-content;
  min-width: 100px;

  & > div:first-child {
    padding: 8px;
  }
`
const ChevronsBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 8px;
`

const ChevronButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  svg {
    width: 24px; 
    height: 24px;
    path {
      stroke: ${({theme}) => theme.colors.green};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const opts: Array<{ item: string | ReactNode, value: string | number }> = [
    {
        item: 'День',
        value: '0'
    },
    {
        item: 'Неделя',
        value: '1'
    },
    {
        item: 'Месяц',
        value: '2'
    },
    {
        item: 'Год',
        value: '3'
    },
]

function HeaderView() {
    const [days, setDays] = useState<string>('0');
    const {t} = useTranslation()
    return (
        <Header>
            <Left>
                <HeadingStyled as='h2'>{t("analytic.title")}</HeadingStyled>
                <DropdownStyled isShowOnlyPlaceholder={false} value={days} placeholder=''
                                onSelect={val => setDays(val)} options={opts} label=""/>
                <ChevronsBlock>
                    <ChevronButton><ChevronIcon/></ChevronButton>
                    <ChevronButton><ChevronRightIcon/></ChevronButton>
                </ChevronsBlock>
                <HeadingStyled as='h2'>22-28 августа 2022</HeadingStyled>
            </Left>
            <SettingComponent/>
        </Header>
    );
}

export default HeaderView;