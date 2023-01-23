import React, {ReactNode, useMemo, useState} from 'react';
import {useTranslation} from "react-i18next";
import styled, {useTheme} from "styled-components";
import {Link} from 'react-router-dom';
import PinInput from 'react-pin-input';
import {useAppAction, useAppState} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import {IUser} from "../../types";
import {Button, EButtonVariants} from "../../UI/Button";
import {DoctorIcon} from "../../UI/Svg";
import {useProfileAction, useProfileState} from "../../store/profile/hooks";
import {Dropdown} from "../../UI/Dropdown";

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
  width: 635px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`

const ActionBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`

const LinkForgot = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const ButtonStyled = styled(Button)`
  width: fit-content;
  font-size: 20px;
  line-height: 100%;
  padding: 15px 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px 16px;
    font-size: 16px;
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

const UserOption = ({name, soname, id}: IUser) => (
        <UserOptionStyled>
            <DoctorIcon height={16} width={16}/>
            <Text>{name} {soname} <span>– ID {id}</span></Text>
        </UserOptionStyled>
    )

function PinModal() {
    const {colors} = useTheme()
    const {onCloseModal} = useAppAction()
    const [pin, setPin] = useState<string>('');
    const {t} = useTranslation()
    const {modals} = useAppState()
    const {profiles, selectedProfile, selectedProfileId} = useProfileState()
    const {onSelectProfile, onSelectProfileId} = useProfileAction()

    const activities: Array<{item: ReactNode, value: number}> = useMemo(() => (
        profiles.filter((profile) => profile.id !== selectedProfile.id).map((profile) => ({
            item: <UserOption {...profile}/>,
            value: profile.id || 0
        }))
    ), [t, selectedProfile, profiles])

    if (!modals[EModals.Pin]) return null;
    return (
        <Modal modal={EModals.Pin} title={t("profile.pin_modal.title")}
               titleChildren={
                   <DropdownStyled isShowOnlyPlaceholder={false} value={selectedProfileId || 0} placeholder=''
                                   onSelect={val => onSelectProfileId(val)} options={activities} label=""/>
               }
        >
            <Content>
                <PinInput
                    length={4}
                    initialValue=""
                    onChange={(value) => setPin(value)}
                    type="numeric"
                    inputMode="number"
                    style={{
                        display: "flex",
                        gap: 20,
                    }}
                    inputStyle={{
                        padding: "15px 0",
                        width: 60,
                        height: 52,
                        border: 'none',
                        borderBottom: `1px solid ${colors.borderInputDefault}`,
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: '140%',
                        textAlign: 'center',
                        color: colors.black,
                    }}
                    onComplete={() => onCloseModal(EModals.Pin)}
                    autoSelect
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
                <ActionBlock>
                    <LinkForgot to="/">{t("profile.pin_modal.forgot")}</LinkForgot>
                    <ButtonStyled onClick={() => {
                        onSelectProfile()
                        onCloseModal(EModals.Pin)
                    }} disabled={pin === ''} variant={EButtonVariants.Default}>{t("profile.pin_modal.enter")}</ButtonStyled>
                </ActionBlock>
            </Content>
        </Modal>
    );
}

export default PinModal;