import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {MessageIcon} from "../../UI/Svg";
import {useMessengerState} from "../../store/messenger/hooks";
import {HeaderChatComponent, NewMessageComponent} from "../../components/MessengerComponents";
import {MessageListView} from "./index";

const Wrapper = styled.div<{ isSelectedChat: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: ${({isSelectedChat}) => isSelectedChat ? 'flex-start' : 'center'};
  border-radius: 10px;
  background: ${({theme}) => theme.colors.background};
  width: 100%;
  flex: 1;
`

const EmptyBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  svg path {
    stroke: ${({theme}) => theme.colors.gray};
  }
`
const Text = styled.p`
  max-width: 206px;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`

function MessengerAreaView({...props}) {
    const {selectedChat} = useMessengerState()
    const [message, setMessage] = useState<string>('');
    const {t} = useTranslation()
    return (
        <Wrapper isSelectedChat={selectedChat !== null} {...props}>
            {
                selectedChat === null
                    ?
                    <EmptyBlock>
                        <MessageIcon width={48} height={48}/>
                        <Text>{t("messenger.select_chat")}</Text>
                    </EmptyBlock>
                    : <>
                        <HeaderChatComponent/>
                        <MessageListView/>
                        <NewMessageComponent message={message} onChange={val => setMessage(val)} placeholder={t('messenger.enter') as string}/>
                    </>
            }
        </Wrapper>
    );
}

export default MessengerAreaView;