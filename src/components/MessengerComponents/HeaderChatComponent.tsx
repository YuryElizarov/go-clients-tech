import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import ChatUserComponent from './ChatUserComponent';
import ActionsComponent from "./ActionsComponent";
import {MessageIcon} from "../../UI/Svg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0 10px;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px 0 8px;
    gap: 8px;
  }
`
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 0 30px;
`

const Unsubscribed = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 7px;
  font-weight: 500;
  width: fit-content;
  height: fit-content;
  font-size: 16px;
  border: none;
  padding: 8px 10px;
  border-radius: 5px;
  line-height: 100%;
  background: ${({theme}) => theme.colors.borderInputDefault};
  color: ${({theme}) => theme.colors.black};
  cursor: pointer;
  svg path {
    stroke: ${({theme}) => theme.colors.black};
    stroke-width: 2;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 6px 8px;
    font-size: 12px;
  }
`

function HeaderChatComponent() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Row>
                <ChatUserComponent/>
                <Unsubscribed>
                    <MessageIcon height={16} width={16}/>
                    {t("messenger.unsubscribed")}
                </Unsubscribed>
                <ActionsComponent/>
            </Row>
        </Wrapper>
    );
}

export default HeaderChatComponent;