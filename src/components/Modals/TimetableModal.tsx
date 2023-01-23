import React, {ReactNode, useMemo} from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {useAppState} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import {IUser} from "../../types";
import {DoctorIcon, PlusIcon} from "../../UI/Svg";
import {useProfileAction, useProfileState} from "../../store/profile/hooks";
import {Dropdown} from "../../UI/Dropdown";
import {Button, EButtonVariants} from "../../UI/Button";
import {TimetableRowComponent} from "../BookingComponents";

const UserOptionStyled = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 4px;

  svg:first-child {
    margin-right: 6px;

    path {
      fill: ${({theme}) => theme.colors.gray};
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
`

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 10px;
  width: 988px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 8px;
  }
`

const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.black};

  span {
    color: ${({theme}) => theme.colors.gray};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const DropdownStyled = styled(Dropdown)`
  border-radius: 5px;
  min-width: 255px;

  & > div:first-child {
    padding: 8px;
  }
`

const Header = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  border-radius: 5px;

  svg path {
    stroke: ${({theme}) => theme.colors.white};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    padding: 6px 8px;
  }
`

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  padding: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const FooterButton = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  max-width: unset;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px 16px;
    font-size: 16px;
  }
`

const UserOption = ({name, soname, id}: IUser) => (
    <UserOptionStyled>
        <DoctorIcon height={16} width={16}/>
        <Text>{name} {soname} <span>– ID {id}</span></Text>
    </UserOptionStyled>
)

function TimetableModal() {
    const {t} = useTranslation()
    const {modals} = useAppState()
    const {profiles, selectedProfile, selectedProfileId} = useProfileState()
    const {onSelectProfileId} = useProfileAction()

    const activities: Array<{ item: ReactNode, value: number }> = useMemo(() => (
        profiles.map((profile) => ({
            item: <UserOption {...profile}/>,
            value: profile.id || 0
        }))
    ), [t, selectedProfile, profiles])

    if (!modals[EModals.Timetable]) return null;
    return (
        <Modal modal={EModals.Timetable} title={t("booking.timetable.title")}
               titleChildren={
                   <Header>
                       <DropdownStyled isShowOnlyPlaceholder={false} value={selectedProfileId || 0} placeholder=''
                                       onSelect={val => onSelectProfileId(val)} options={activities} label=""/>
                       <ButtonStyled variant={EButtonVariants.Default}>
                           <PlusIcon/> {t("booking.services.add")}
                       </ButtonStyled>
                   </Header>
               }
        >
            <Content>
                <TimetableRowComponent/>
                <TimetableRowComponent/>
                <TimetableRowComponent/>
                <TimetableRowComponent/>
                <TimetableRowComponent/>
            </Content>
            <ButtonBlock>
                <FooterButton variant={EButtonVariants.Text}>{t("booking.timetable.discard")}</FooterButton>
                <FooterButton variant={EButtonVariants.Default}>{t("booking.timetable.save")}</FooterButton>
            </ButtonBlock>
        </Modal>
    );
}

export default TimetableModal;