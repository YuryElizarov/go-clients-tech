import React, {useEffect} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import { PreferencesComponent } from '../../components/PatientsComponents';
import {MessengerAreaView} from "../MessengerViews";
import {CardComponent} from "../../components/UserComponents";
import {useMessengerAction} from "../../store/messenger/hooks";

const Wrapper = styled.div`
  width: 100%;
  max-width: 986px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
`

const Messanger = styled(MessengerAreaView)`
  width: 100%;
  height: 664px;
`
function RightView() {
    const {t} = useTranslation()
    const {onSelectChat} = useMessengerAction()

    useEffect(() => {
        onSelectChat(0)
    }, [onSelectChat]);

    return (
        <Wrapper>
            <Messanger/>
            <CardComponent title={t("patients.preferences.title")}>
                <PreferencesComponent/>
            </CardComponent>
        </Wrapper>
    );
}

export default RightView;