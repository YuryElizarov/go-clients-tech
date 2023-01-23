import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {
    CardComponent,
    DashboardSettingsComponent,
    EmailSettingsComponent,
    ReferralComponent
} from "../../components/UserComponents";
import {Button, EButtonVariants} from "../../UI/Button";
import {LockIcon} from "../../UI/Svg";
import MainFormComponent from "../../components/UserComponents/MainFormComponent";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`

const ButtonHeader = styled(Button)`
  padding: 8px 10px;
  gap: 7px;
  font-size: 16px;
  line-height: 100%;
  border-radius: 5px;
  width: fit-content;
  
`
function SettingView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <ReferralComponent/>
            <CardComponent title={t("user.person_data.data.title")}
                           headerChildren={<ButtonHeader
                               variant={EButtonVariants.Gray}>
                               <LockIcon/>
                               {t("user.person_data.data.buttons.change_password")}</ButtonHeader>}
            >
                <MainFormComponent/>
            </CardComponent>
            <CardComponent title={t("user.person_data.email_setting.title")}>
                <EmailSettingsComponent/>
            </CardComponent>
            <CardComponent title={t("user.person_data.dashboard_setting.title")}>
                <DashboardSettingsComponent/>
            </CardComponent>
        </Wrapper>
    );
}

export default SettingView;