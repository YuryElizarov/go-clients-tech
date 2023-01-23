import React from 'react';
import styled from "styled-components";
import {SearchComponent} from "../../components/DashboardComponents/SearchComponents";
import {
    LocationComponent, MessageComponent,
    NotificationComponent,
    WalletComponent, LangComponent
} from "../../components/DashboardComponents/SettingComponents";
import {ProfileMainComponent} from "../../components/DashboardComponents/ProfileComponent";

const Navbar = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: space-between;
  z-index: 1;
`

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 24px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 20px;
  }
`

const Settings = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
`

function NavbarView() {
    return (
        <Navbar>
            <SearchComponent/>
            <RightBlock>
                <Settings>
                    <LocationComponent/>
                    <LangComponent/>
                    <WalletComponent/>
                    <NotificationComponent/>
                    <MessageComponent/>
                </Settings>
                <ProfileMainComponent/>
            </RightBlock>
        </Navbar>
    );
}

export default NavbarView;