import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Heading} from "../../UI/Heading";
import {SearchIcon} from "../../UI/Svg";
import {ChatListComponent} from "../../components/MessengerComponents";
import {Tabs} from '../../UI/Tabs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  flex: 1;
  width: 100%;
  height: 100%;
  max-width: 552px;
  ${({theme}) => theme.mediaQueries.ll} {
    max-width: calc(100% / 3);
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
  padding: 20px 20px 0 20px;

  svg path {
    stroke: ${({theme}) => theme.colors.gray}
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 16px 0 16px;
  }
`

const TabsStyled = styled(Tabs)`
  height: 100%;
  overflow: hidden;
  & > div:first-child {
    padding: 0 20px;
    width: 100%;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    & > div:first-child {
      padding: 0 16px;
    }
    
  }
`

function DialogsView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t('messenger.title')}</HeadingStyled>
                <SearchIcon/>
            </Header>
            <TabsStyled headers={[
                <>{t("messenger.tabs.all")} <span>12</span></>,
                <>{t("messenger.tabs.patients")} <span>1</span></>,
                <>{t("messenger.tabs.external")}<span>2</span></>,
                <>{t("messenger.tabs.facebook")}<span>3</span></>,
                <>{t("messenger.tabs.gmb")}<span>2</span></>,
            ]}
                        contents={[
                            <ChatListComponent/>,
                            <ChatListComponent/>,
                            <ChatListComponent/>,
                            <ChatListComponent/>,
                            <ChatListComponent/>,
                        ]}
            />
        </Wrapper>
    );
}

export default DialogsView;