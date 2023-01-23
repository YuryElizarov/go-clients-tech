import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import UserComponent from "../../components/DashboardComponents/ActivityComponents/UserComponent";
import {users} from '../../mock/users';
import ActivityContentComponent from "../../components/DashboardComponents/ActivityComponents/ActivityContentComponent";
import {mockActivityList} from "../../mock/activity";
import {Button, EButtonVariants} from "../../UI/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 16px;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
`

const ButtonsBlock = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 8px;
  justify-content: flex-start;
`

const ButtonStyled = styled(Button)`
  width: fit-content;
  padding: 8px 10px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
`

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`

const LinkStyled = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${({theme}) => theme.colors.green};
`

function PatientInfoView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <UserComponent patient={{...users[0], patient_id: 0}} date={new Date(1669442971000)}/>
            <ActivityContentComponent item={{
                ...mockActivityList[3],
                customTitle: 'forms.patients.info.medical_history',
                patient: {...users[0], patient_id: 0},
                date: new Date(1669442971000)
            }}/>
            <ActivityContentComponent item={{
                ...mockActivityList[3],
                customTitle: 'forms.patients.info.general_practice',
                patient: {...users[0], patient_id: 0},
                date: new Date(1669442971000)
            }}/>
            <ActivityContentComponent item={{
                ...mockActivityList[3],
                customTitle: 'forms.patients.info.history',
                patient: {...users[0], patient_id: 0},
                date: new Date(1669442971000)
            }}/>
            <Footer>
                <ButtonsBlock>
                    <ButtonStyled variant={EButtonVariants.Default}>{t("forms.patients.buttons.accept")}</ButtonStyled>
                    <ButtonStyled variant={EButtonVariants.Gray}>{t("forms.patients.buttons.cancel")}</ButtonStyled>
                </ButtonsBlock>
                <LinkStyled to='/'>{t("forms.patients.buttons.details")}</LinkStyled>
            </Footer>
        </Wrapper>
    );
}

export default PatientInfoView;