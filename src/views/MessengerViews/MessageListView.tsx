import React from 'react';
import styled from "styled-components";
import { MessageComponent, NewMessageBlockComponent } from '../../components/MessengerComponents';
import {IUser} from "../../types";
import {user} from "../../mock/search";

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  align-content: center;
  justify-content: flex-start;
  padding: 20px;
  gap: 20px;
  position: relative;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`

const DateBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.darkGrey};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
  border: 1px solid ${({theme}) => theme.colors.grayC4};
  border-radius: 56px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 6px 8px;
    font-size: 12px;
  }
`

const messages: Array<{ user: IUser, text: string, date: string }> = [
    {
        user: {
            ...user,
            id: 0,
        },
        text: 'Сейчас отвечу вам',
        date: "7 августа 2022 в 20:32"
    },
    {
        user: {
            ...user,

            image: 'account2.png',
            id: 1,
        },
        text: 'Мда, ну это конечно он вытворил, неадкеват лютый, кто-ж так ездит...',
        date: "7 августа 2022 в 20:32"
    },
    {
        user: {
            ...user,
            image: 'account2.png',
            id: 1,
        },
        text: 'Здравствуйте',
        date: "7 августа 2022 в 20:32"
    },
]

function MessageListView() {
    return (
        <Wrapper>
            <DateBlock>7 Sep 2022</DateBlock>
            {
                messages.slice(0,2).map((message, id) => <MessageComponent key={`Message-${id}`} {...message}/>)
            }
            <NewMessageBlockComponent/>
            {
                messages.slice(2).map((message, id) => <MessageComponent key={`Message-${id}`} {...message}/>)
            }
        </Wrapper>
    );
}

export default MessageListView;