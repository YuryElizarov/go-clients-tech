import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import _ from 'lodash';
import ListWrapperComponent from "./ListWrapperComponent";
import {useBookingState} from "../../store/booking/hooks";
import {CheckBox} from "../../UI/Input";
import {MoreAction} from "../../UI/MoreAction";
import {DeleteIcon, EditIcon, EyeIcon, UserIcon} from "../../UI/Svg";

const Content = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.darkGrey};

  a {
    color: ${({theme}) => theme.colors.green};
    text-decoration: underline;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const DoctorRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`
const RightBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`
const LeftBlock = styled(RightBlock)`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`
const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  gap: 10px;
  background: ${({theme}) => theme.colors.greenHover};
  color: ${({theme}) => theme.colors.green};
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  border-radius: 3px;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    gap: 8px;
  }
`

const DisableTag = styled(Tag)`
  background: ${({theme}) => theme.colors.borderInputDefault};
  color: ${({theme}) => theme.colors.darkGrey};
`
const Specialisation = styled(Tag)`
  background: ${({theme}) => theme.colors.lightBiege};
  color: ${({theme}) => theme.colors.black};
  justify-content: flex-start;
`
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

export const Account = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({theme}) => theme.colors.lightBiege};
  ${({theme}) => theme.mediaQueries.ll} {
    width: 46px;
    height: 46px;
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

const IdBlock = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`

const UserInfo = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
  flex-direction: column;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`
function DoctorsComponent() {
    const {t} = useTranslation()
    const [values, setValues] = useState<string[]>([]);
    const {doctors} = useBookingState()

    const onChange = (val: any) => {
        setValues(prevState => {
            if (_.includes(prevState, val)) {
                return [...prevState.filter((doctor) => doctor !== val)]
            }
            return [...prevState, val]
        })
    }
    return (
        <>
            <Content>
                {t("constructor.doctors.desc")}
            </Content>
            <ListWrapperComponent length={doctors.length}>
                {
                    doctors.map(({specialization, isVacation, name, soname, id}, did) => (
                        <DoctorRow key={did}>
                            <LeftBlock>
                                <CheckBox value={_.includes(values, String(id))} onChange={() => onChange(String(did))}
                                          id={`${did}`}/>
                                <User>
                                    <Account>
                                        <UserIcon/>
                                    </Account>
                                    <UserInfo>
                                        <Name>{name} {soname}</Name>
                                        <IdBlock>ID {id}</IdBlock>
                                    </UserInfo>
                                </User>
                            </LeftBlock>
                            <RightBlock>
                                <Specialisation>{specialization}</Specialisation>

                                {isVacation ? <DisableTag>{t("booking.doctors.tags.vacation")}</DisableTag> :
                                    <Tag>{t("booking.doctors.tags.active")}</Tag>}
                                <MoreAction
                                    actions={[
                                        {
                                            title: <><EditIcon/> {t("booking.doctors.actions.edit")}</>,
                                            callback: () => {
                                            }
                                        },
                                        {
                                            title: <><EyeIcon/> {t("booking.doctors.actions.visible")}</>,
                                            callback: () => {
                                            }
                                        },
                                        {
                                            title: <><DeleteIcon/> {t("booking.doctors.actions.delete")}</>,
                                            callback: () => {
                                            }
                                        }
                                    ]}
                                />
                            </RightBlock>
                        </DoctorRow>
                    ))
                }
            </ListWrapperComponent>
        </>
    );
}

export default DoctorsComponent;