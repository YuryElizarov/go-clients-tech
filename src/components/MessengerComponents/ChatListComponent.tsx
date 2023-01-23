import React from 'react';
import styled from "styled-components";
import ChatComponent from "./ChatComponent";
import {user} from "../../mock/search";
import {IUser} from "../../types";

const List = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  margin-top: -20px;
  justify-content: flex-start;
  overflow: auto;
`

const chats: Array<{ user: IUser, isImportant: boolean, countNewMessage: number, lastMessage: string }> = [
    {
        user,
        countNewMessage: 1,
        isImportant: true,
        lastMessage: "Текст последнего сообщения, которое написал вам юз..."
    },
    {
        user,
        countNewMessage: 12,
        isImportant: false,
        lastMessage: "Текст последнего сообщения, которое написал вам юз..."
    },
    {
        user,
        countNewMessage: 0,
        isImportant: false,
        lastMessage: "Текст последнего сообщения, которое написал вам юз..."
    },
    {
        user,
        countNewMessage: 0,
        isImportant: false,
        lastMessage: "Текст последнего сообщения, которое написал вам юз..."
    },
    {
        user,
        countNewMessage: 0,
        isImportant: false,
        lastMessage: "Текст последнего сообщения, которое написал вам юз..."
    },
    {
        user,
        countNewMessage: 0,
        isImportant: false,
        lastMessage: "Текст последнего сообщения, которое написал вам юз..."
    },
    {
        user,
        countNewMessage: 0,
        isImportant: false,
        lastMessage: "Текст последнего сообщения, которое написал вам юз..."
    },
    {
        user,
        countNewMessage: 0,
        isImportant: false,
        lastMessage: "Текст последнего сообщения, которое написал вам юз..."
    },
    {
        user,
        countNewMessage: 0,
        isImportant: false,
        lastMessage: "Текст последнего сообщения, которое написал вам юз..."
    },
]

function ChatListComponent() {

    return (
        <List>
            {
                chats.map((chat, id) => <ChatComponent key={`Chat-${id}`} {...chat} id={id}/>)
            }
        </List>
    );
}

export default ChatListComponent;