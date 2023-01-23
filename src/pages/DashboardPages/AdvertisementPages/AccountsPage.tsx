import React from 'react';
import styled from "styled-components";
import { AccountComponent } from '../../../components/AdvertisementComponents';
import {IAccount} from "../../../types";
import {users} from "../../../mock/users";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 16px;
`

const List = styled.div`
  width: 100%;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 0 20px;
  background: ${({theme}) => theme.colors.background};
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 0 16px;
  }
`

const googleList: IAccount[] = [
    {
        ...users[0],
        isGoogle: true,
        date:'с 7 августа 2022'
    },
    {
        ...users[0],
        image: 'account3.png',
        isGoogle: true,
        date:'с 7 августа 2022'
    },
    {
        ...users[0],
        isGoogle: true,
        date:'с 7 августа 2022'
    },
    {
        ...users[0],
        image: 'account3.png',
        isGoogle: true,
        date:'с 7 августа 2022'
    },
    {
        ...users[0],
        isGoogle: true,
        date:'с 7 августа 2022'
    },
    {
        ...users[0],
        isGoogle: true,
        date:'с 7 августа 2022'
    },
]
const facebookList: IAccount[] = [
    {
        ...users[0],
        isGoogle: false,
        date:'с 7 августа 2022'
    },
    {
        ...users[0],
        image: 'account3.png',
        isGoogle: false,
        date:'с 7 августа 2022'
    },
    {
        ...users[0],
        isGoogle: false,
        date:'с 7 августа 2022'
    },
    {
        ...users[0],
        image: 'account3.png',
        isGoogle: false,
        date:'с 7 августа 2022'
    },
    {
        ...users[0],
        isGoogle: false,
        date:'с 7 августа 2022'
    },
    {
        ...users[0],
        isGoogle: false,
        date:'с 7 августа 2022'
    },
]
function AccountsPage() {
    return (
        <Wrapper>
            <List>
                {googleList.map((item, id) => <AccountComponent account={item} key={`Google-${id}`}/>)}
            </List>
            <List>
                {facebookList.map((item, id) => <AccountComponent account={item} key={`Facebook-${id}`}/>)}
            </List>
        </Wrapper>
    );
}

export default AccountsPage;