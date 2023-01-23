import React from 'react';
import styled from "styled-components";
import {UserIcon} from "../../../UI/Svg";
import {renderDate} from "../../../utils";
import {Account} from "./ActivityComponent";
import {IPatient} from "../../../types";


const User = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`

const UserInfo = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
  flex-direction: column;
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
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`
function UserComponent({patient, date}: { patient: IPatient, date: Date }) {
    return (

        <User>
            <Account>
                <UserIcon/>
            </Account>
            <UserInfo>
                <Name>{patient.name} {patient.soname}</Name>
                <DateBlock>{renderDate(date, true)}</DateBlock>
            </UserInfo>
        </User>
    );
}

export default UserComponent;