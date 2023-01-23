import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {MoreAction} from "../../UI/MoreAction";
import {CloseIcon, DeleteIcon, EditIcon, EyeIcon, PlusIcon, UserIcon} from "../../UI/Svg";
import {IDoctorBooking} from "../../types";
import {useAppAction} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px 15px 15px;
  gap: 10px;
  isolation: isolate;
  border: 1px solid ${({theme}) => theme.colors.borderInputDefault};
  border-radius: 5px;
  position: relative;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
    padding: 20px 12px 12px; 
  }
`

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: space-between;
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

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0;
  gap: 10px;
  width: 100%;
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
    gap: 8px;
    font-size: 12px;
  }
`

const DisableTag = styled(Tag)`
  background: ${({theme}) => theme.colors.borderInputDefault};
  color: ${({theme}) => theme.colors.darkGrey};
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
    font-size: 12px;
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

const Specialisation = styled(Tag)`
  background: ${({theme}) => theme.colors.lightBiege};
  color: ${({theme}) => theme.colors.black};
  justify-content: flex-start;
`

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  gap: 15px;
  background: ${({theme}) => theme.colors.lightBiege};
  border-radius: 5px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px;
    gap: 12px;
  }
`

const Timetable = styled(ContentBlock)`
  max-width: 373px;
  width: 100%;
`

const TimetableList = styled.ul`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 8px;
  }
`

const TimetableItem = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.darkGrey};
  span {
    color: ${({theme}) => theme.colors.black};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const TypesBlock = styled(ContentBlock)`
  width: 100%;
`

const TypesList = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const TypeItem = styled(Tag)`
  gap: 4px;
  cursor: pointer;

  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.darkGrey};
  svg {
    width: 8px;
    height: 8px;
    path {
      stroke: ${({theme}) => theme.colors.grayC4};
      stroke-width: 3;
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    svg {
      width: 6px;
      height: 6px;
    }
  }
`

const ContentTitle = styled.h5`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
  }
`

const ButtonBlock = styled.div`
  display: flex;
  width: 100%;
  margin-top: 12px;

`

const ButtonText = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  border: none;
  background: none;
  gap: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};

  svg {
    height: 16px;
    width: 16px;

    path {
      stroke: ${({theme}) => theme.colors.green};
    }
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`

function DoctorComponent({isVacation, id, typesList, workHours, specialization, soname, name}: IDoctorBooking) {
    const {onShowModal} = useAppAction()
    const {t} = useTranslation()
    return (
        <Wrapper>
            <Header>
                <User>
                    <Account>
                        <UserIcon/>
                    </Account>
                    <UserInfo>
                        <Name>{name} {soname}</Name>
                        <IdBlock>ID {id}</IdBlock>
                    </UserInfo>
                </User>
                <RightBlock>
                    <Specialisation>{specialization}</Specialisation>

                    {isVacation ? <DisableTag>{t("booking.doctors.tags.vacation")}</DisableTag> : <Tag>{t("booking.doctors.tags.active")}</Tag>}
                    <MoreAction
                        actions={[
                            {
                                title: <><EditIcon/> {t("booking.doctors.actions.edit")}</>,
                                callback: () => {}
                            },
                            {
                                title: <><EyeIcon/> {t("booking.doctors.actions.visible")}</>,
                                callback: () => {}
                            },
                            {
                                title: <><DeleteIcon/> {t("booking.doctors.actions.delete")}</>,
                                callback: () => {}
                            }
                        ]}
                    />
                </RightBlock>
            </Header>
            <Content>
                <Timetable>
                    <ContentTitle>{t("booking.doctors.timetable.title")}</ContentTitle>
                    <TimetableList>
                        <TimetableItem>{t("booking.doctors.timetable.day_1")} <span>{workHours.day1}</span></TimetableItem>
                        <TimetableItem>{t("booking.doctors.timetable.day_2")} <span>{workHours.day2}</span></TimetableItem>
                        <TimetableItem>{t("booking.doctors.timetable.day_3")} <span>{workHours.day3}</span></TimetableItem>
                    </TimetableList>
                    <ButtonBlock>
                        <ButtonText onClick={() => onShowModal(EModals.Timetable)}><PlusIcon/> {t("booking.doctors.buttons.edit")}</ButtonText>
                    </ButtonBlock>
                </Timetable>
                <TypesBlock>
                    <ContentTitle>{t("booking.doctors.types")}</ContentTitle>
                    <TypesList>
                        {
                            typesList.map((item, tid) => <TypeItem key={`Type-${tid}`}>{item} <CloseIcon/></TypeItem>)
                        }
                    </TypesList>
                    <ButtonBlock>
                        <ButtonText><PlusIcon/> {t("booking.doctors.buttons.add")}</ButtonText>
                    </ButtonBlock>
                </TypesBlock>
            </Content>
        </Wrapper>
    );
}

export default DoctorComponent;