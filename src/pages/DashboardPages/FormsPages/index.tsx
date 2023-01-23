import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {TabsView} from "../../../views/BookingsViews";
import FormPage from './FormPage';
import PatientsPage from './PatientsPage';
import {Button, EButtonVariants} from "../../../UI/Button";
import {PlusIcon} from "../../../UI/Svg";
import {useAppAction} from "../../../store/app/hooks";
import {EModals} from "../../../store/app/types";

const links: Array<{ title: string, link: string }> = [
    {title: 'forms.tabs.forms', link: '/forms'},
    {title: 'forms.tabs.patients_submissions', link: '/forms/patients'}
]

const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  gap: 7px;
  font-size: 16px;
  line-height: 100%;
  border-radius: 5px;
  width: fit-content;
  
  svg path {
    stroke: ${({theme}) => theme.colors.white};
  }
`

function Index() {
    const {t} = useTranslation()
    const {onShowModal} = useAppAction()
    return (
        <>
            <TabsWrapper>
                <TabsView links={links}/>
                <ButtonStyled onClick={() => onShowModal(EModals.CustomizeForm)} variant={EButtonVariants.Default}><PlusIcon/>{t("forms.button")}</ButtonStyled>
            </TabsWrapper>
            <Routes>
                <Route path="/" element={<FormPage/>}/>
                <Route path="/patients" element={<PatientsPage/>}/>
            </Routes>
        </>
    );
}

export default Index;