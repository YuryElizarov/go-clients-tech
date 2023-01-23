import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {PlusIcon} from "../../../UI/Svg";
import ProfileItemComponent from './ProfileItemComponent';
import {useProfileState} from "../../../store/profile/hooks";

interface ProfilesListComponentProps {
    isShow: boolean,
    onClose: () => void
}

const ListStyled = styled.div<{ isShow: boolean }>`
  position: absolute;
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  background: #FFFFFF;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  min-height: 56px;
  padding-top: 56px;
  visibility: ${({isShow}) => isShow ? 'visible' : 'hidden'};
  opacity: ${({isShow}) => isShow ? '1' : '0'};
`

const Footer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  padding: 8px 20px 16px;
  gap: 12px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 10px;
    padding: 6px 16px 12px;
  }
`

const ActionItem = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  gap: 8px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  cursor: pointer;
  color: ${({theme}) => theme.colors.gray};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

const Line = styled.hr`
  width: 100%;
  border: none;
  margin: 0;
  height: 1px;
  background: ${({theme}) => theme.colors.borderInputDefault};;
`

function ProfilesListComponent({isShow, onClose}: ProfilesListComponentProps) {
    const {t} = useTranslation()
    const {profiles, selectedProfile} = useProfileState()

    return (
        <ListStyled isShow={isShow} onClick={() => {
            onClose()
        }}>
            {
                profiles.filter((profile) => profile.id !== selectedProfile.id).map((item, id) => <ProfileItemComponent key={`user-${id}`} {...item}/>)
            }
            <Footer>
                <ActionItem>
                    <PlusIcon/>
                    {t("profile.add")}
                </ActionItem>
                <Line/>
                <ActionItem onClick={() => {

                    onClose()
                }}>
                    {t("profile.cancel")}
                </ActionItem>
            </Footer>
        </ListStyled>
    );
}

export default ProfilesListComponent;