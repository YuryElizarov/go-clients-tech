import React, {ReactNode, useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {Button, EButtonVariants} from "../../../UI/Button";
import {PlusIcon} from "../../../UI/Svg";
import {Heading} from "../../../UI/Heading";
import {Tabs} from "../../../UI/Tabs";
import {Dropdown} from "../../../UI/Dropdown";
import {SubscribeTableView} from "../../../views/PatientsVies";
import UnsubscribeTableView from "../../../views/PatientsVies/UnsubscribeTableView";


const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 5px;
  padding: 20px 20px 0;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 16px 0;
  }
`

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const TabsStyled = styled(Tabs)`
  gap: 5px;
`


const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  border-radius: 5px;
  white-space: nowrap;

  svg {
    path {
      stroke: ${({theme}) => theme.colors.white}
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 7px 8px;
    font-size: 12px;
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 8px;
`
const DropdownStyled = styled(Dropdown)`
  border-radius: 5px;
  width: 100%;

  & > div:first-child {
    padding: 8px;
  }
`

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

function PatientsPage() {
    const {t} = useTranslation()
    const [provider, setProvider] = useState<string>('');
    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("patients.title")}</HeadingStyled>
                <Buttons>
                    <DropdownStyled isShowOnlyPlaceholder={false} value={provider} placeholder={t("patients.provider")}
                                    onSelect={val => setProvider(val)} options={optProvider} label=""/>
                    <ButtonStyled as={Link} to='/patients/patient' variant={EButtonVariants.Default}><PlusIcon/>{t('patients.button')}</ButtonStyled>
                </Buttons>
            </Header>
            <TabsStyled headers={[
                <>{t("patients.tabs.subscribed")} <span>120</span></>,
                <>{t("patients.tabs.unsubscribed")} <span>2</span></>,
                <>{t("patients.tabs.drafts")} <span>2</span></>,
            ]}
                        contents={[
                            <SubscribeTableView/>,
                            <UnsubscribeTableView/>,
                            <SubscribeTableView/>,
                        ]}
            />
        </Wrapper>
    );
}

export default PatientsPage;