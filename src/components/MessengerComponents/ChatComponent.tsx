import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Account} from "../DashboardComponents/ProfileComponent/styled";
import {UserIcon} from "../../UI/Svg";
import {IUser} from "../../types";
import {useMessengerAction, useMessengerState} from "../../store/messenger/hooks";


const Chat = styled.div<{isSelected: boolean}>`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  padding: 20px;
  cursor: pointer;
  gap: 10px;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-left: 2px solid ${({theme, isSelected}) => isSelected ? theme.colors.green : 'transparent'};

  svg path {
    stroke: ${({theme}) => theme.colors.gray};
  }
  &:hover {
    background: ${({theme}) => theme.colors.lightBiege};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 8px;
  }
`

const InfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
  flex-direction: column;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
`

const Name = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`
const DateBlock = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 10px;
  }
`

const MessageBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const MessageContent = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  flex: 1;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const CountNewMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 4.5px;
  min-width: 14px;
  height: 14px;
  background: ${({theme}) => theme.colors.green};
  border-radius: 10px;
  font-size: 10px;
  line-height: 100%;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
`

const ImportantMessage = styled(MessageContent)`
  color: ${({theme}) => theme.colors.green};
`

const AccountStyled = styled(Account)`
  min-width: 56px;
  height: 56px;
  ${({theme}) => theme.mediaQueries.ll} {
    min-width: 46px;
    height: 46px;
  }
`

function ChatComponent({
                           user: {name, soname},
                           isImportant,
                           lastMessage,
                           id,
                           countNewMessage
                       }: { user: IUser, isImportant: boolean,id: number, countNewMessage: number, lastMessage: string }) {
    const {t} = useTranslation()
    const {selectedChat} = useMessengerState()
    const {onSelectChat} = useMessengerAction()
    return (
        <Chat isSelected={id === selectedChat} onClick={() => onSelectChat(id)}>
            <AccountStyled>
                <UserIcon height={24} width={24}/>
            </AccountStyled>
            <InfoBlock>
                <Header>
                    <Name>{name} {soname}</Name>
                    <DateBlock>Today at 9:30 AM</DateBlock>
                </Header>
                <MessageBlock>
                    {
                        isImportant
                            ?
                            <ImportantMessage>{t("messenger.important")}</ImportantMessage>
                            :
                            <MessageContent>{lastMessage}</MessageContent>
                    }
                    {countNewMessage > 0 && <CountNewMessage>{countNewMessage}</CountNewMessage>}
                </MessageBlock>
            </InfoBlock>
        </Chat>
    );
}

export default ChatComponent;