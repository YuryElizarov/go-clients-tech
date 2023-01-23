import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {Dropdown} from "../../UI/Dropdown";
import {ReminderTableComponent} from "../../components/DashboardComponents/ReminderComponent";
import {Tabs} from "../../UI/Tabs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  flex: 1;
  width: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 120%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
`

const opts: Array<{item: string, value: string}> = [
    {item: '22 августа 2022', value: '22 августа 2022'},
]
function RemindersView() {
    const {t} = useTranslation()
    const [val, setVal] = useState<string>(opts[0].value);
    return (
        <Wrapper>

            <Header>
                <HeadingStyled as="h3">{t("reminder.title")}</HeadingStyled>
                <Dropdown isShowOnlyPlaceholder={false} value={val} placeholder=''
                          onSelect={v => setVal(v)} options={opts} label=""/>
            </Header>
            <Tabs headers={[
                <>{t("reminder.tabs.all")} <span>120</span></>,
                <>{t("reminder.tabs.pending")} <span>12</span></>,
                <>{t("reminder.tabs.cancelled")} <span>1</span></>,
                <>{t("reminder.tabs.go_confirmed")} <span>2</span></>,
                <>{t("reminder.tabs.office_confirmed")} <span>3</span></>,
                <>{t("reminder.tabs.custom_response")} <span>2</span></>,
                <>{t("reminder.tabs.no_response")} <span>0</span></>,
            ]}
                  contents={[
                      <ReminderTableComponent/>,
                      <ReminderTableComponent/>,
                      <ReminderTableComponent/>,
                      <ReminderTableComponent/>,
                      <ReminderTableComponent/>,
                      <ReminderTableComponent/>,
                      <ReminderTableComponent/>,
                  ]}/>
        </Wrapper>
    );
}

export default RemindersView;