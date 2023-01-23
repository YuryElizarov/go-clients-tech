import React from 'react';
import styled from "styled-components";
import {ClinicIcon, DoctorIcon, PatientIcon} from "../../../UI/Svg";
import {IActivity, IDoctor, IPatient} from "../../../types";
import {renderDate} from "../../../utils";

interface UserSearchComponentProps {
    item: IActivity | IDoctor | IPatient
}

const UserBlock = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 15px;
  cursor: pointer;
  border-bottom: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: ${({theme}) => theme.colors.lightBiege};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 12px;
  }
`

const Account = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.lightBiege};

  svg path {
    stroke: ${({theme}) => theme.colors.green};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    width: 46px;
    height: 46px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`

const InfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
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

const List = styled.ul`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`

const Item = styled.li`
  color: ${({theme}) => theme.colors.gray};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  font-weight: 500;

  span {
    background: ${({theme}) => theme.colors.gray};
    width: 4px;
    height: 4px;
    border-radius: 50%;
    display: flex;
    margin: 0 8px;
  }

  &:first-child {
    color: ${({theme}) => theme.colors.green};

    span {
      display: none;
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Image = styled.img`
  height: 100%;
  width: auto;
`

function UserSearchComponent({item, ...props}: UserSearchComponentProps) {
    return (
        <UserBlock {...props}>
            <Account>
                {
                    'patient' in item
                        ? item.patient.image ? <Image src={`/images/${item.patient.image}`}/> : <ClinicIcon/>
                        : item.image
                            ? <Image src={`/images/${item.image}`}/>
                            : 'specialization' in item
                                ? <DoctorIcon/>
                                : <PatientIcon/>
                }
            </Account>
            <InfoBlock>
                <Name>{'patient' in item ? `${item.patient.name} ${item.patient.soname}` : `${item.name} ${item.soname}`}</Name>
                <List>
                    {
                        'patient' in item
                            ?
                            <>
                                <Item>{item.procedure}</Item>
                                <Item><span/>{renderDate(item.date, true)}</Item>
                            </>
                            : <>
                                <Item>{'specialization' in item ? item.specialization : 'Пациент'}</Item>
                                <Item><span/>{item.phone}</Item>
                                <Item><span/>{item.email}</Item>
                            </>
                    }
                </List>
            </InfoBlock>
        </UserBlock>
    );
}

export default UserSearchComponent;