import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {CardComponent, DevicesComponent, EnterComponent, ProfileComponent} from "../../components/UserComponents";
import {Button, EButtonVariants} from "../../UI/Button";
import {LockIcon} from "../../UI/Svg";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 410px;
  flex-direction: column;
`

const ButtonHeader = styled(Button)`
  padding: 8px 10px;
  gap: 7px;
  font-size: 16px;
  line-height: 100%;
  border-radius: 5px;
  width: fit-content;
  svg path {
    stroke: ${({theme}) => theme.colors.red};
  }
`

function LeftView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <ProfileComponent/>
            <CardComponent title={t("user.person_data.enter.title")}
                           headerChildren={<ButtonHeader
                               variant={EButtonVariants.Red}>
                               <LockIcon/>
                               {t("user.person_data.enter.create_pin")}</ButtonHeader>}
            >
                <EnterComponent/>
            </CardComponent>
            <CardComponent title={t("user.person_data.devices.title")}
            >
                <DevicesComponent/>
            </CardComponent>
        </Wrapper>
    );
}

export default LeftView;