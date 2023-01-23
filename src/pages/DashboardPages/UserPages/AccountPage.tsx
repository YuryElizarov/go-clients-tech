import React from 'react';
import styled from "styled-components";
import AccountComponent from "../../../components/UserComponents/AccountComponent";
import {IProfileAccount} from "../../../types";
import {users} from "../../../mock/users";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 20px; 
  width: 100%; 
`

const list: IProfileAccount[] = [
    {
        ...users[0],
        isGoogle: true,
    },
    {
        ...users[0],
        isGoogle: false,
        facebookLink: 'fb.com/avedmitry',
    },
    {
        ...users[0],
        isGoogle: true,
    },
]
function AccountPage() {
    return (
        <Wrapper>
            {
                list.map((item, id) => (<AccountComponent account={item} key={id}/>))
            }
        </Wrapper>
    );
}

export default AccountPage;