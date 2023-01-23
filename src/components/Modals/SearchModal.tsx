import React, { useState } from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {Modal} from "../../UI/Modal";
import {useAppState} from "../../store/app/hooks";
import {EModals} from '../../store/app/types';
import {SearchIcon} from "../../UI/Svg";
import {mockSearchModal} from "../../mock/search";
import UserSearchComponent from "../DashboardComponents/SearchComponents/UserSearchComponent";


const TitleIcon = styled.div`
  display: flex;

  svg path {
    stroke: ${({theme}) => theme.colors.gray};
  }
`

const UserSearchStyled = styled(UserSearchComponent)`
  min-width: 600px;
`

const Tabs = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const Tab = styled.div<{isActive: boolean}>`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  gap: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  padding-bottom: 16px;
  color: ${({theme, isActive}) => theme.colors[isActive ? 'green' : 'black']};
  border-bottom: 1px solid ${({theme, isActive}) => isActive ? theme.colors.green : 'transparent'};
  cursor: pointer;
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 4.5px;
    background: ${({theme, isActive}) => theme.colors[isActive ? 'green' : 'grayC4']};
    border-radius: 800px;
    color: ${({theme}) => theme.colors.white};
  }
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
  }
`

enum ETab {
    All,
    Patient,
    Doctors,
    Activities,
    Other
}

function SearchModal() {
    const [activeTab, setActiveTab] = useState<ETab>(ETab.All);
    const {t} = useTranslation()
    const {modals} = useAppState()
    if (!modals[EModals.Search]) return null;

    return (
        <Modal modal={EModals.Search} title={t("search.modal_title")}
               titleChildren={<TitleIcon><SearchIcon/></TitleIcon>}
               headerChildren={
                   <Tabs>
                       <Tab isActive={activeTab === ETab.All} onClick={() => setActiveTab(ETab.All)}>{t("search.tabs.all")} <span>120</span></Tab>
                       <Tab isActive={activeTab === ETab.Patient} onClick={() => setActiveTab(ETab.Patient)}>{t("search.tabs.patients")} <span>12</span></Tab>
                       <Tab isActive={activeTab === ETab.Doctors} onClick={() => setActiveTab(ETab.Doctors)}>{t("search.tabs.doctors")} <span>1</span></Tab>
                       <Tab isActive={activeTab === ETab.Activities} onClick={() => setActiveTab(ETab.Activities)}>{t("search.tabs.activities")} <span>3</span></Tab>
                       <Tab isActive={activeTab === ETab.Other} onClick={() => setActiveTab(ETab.Other)}>{t("search.tabs.other")} </Tab>
                   </Tabs>
               }
        >
            {
                mockSearchModal.map((item, id) => <UserSearchStyled key={`Item-${id}`} item={item}/>)
            }
        </Modal>
    );
}

export default SearchModal;