import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {
    SelectLocationComponent,
    WorktimeComponent,
    WrapperComponent
} from "../../components/ContructorComponents";
import SelectServicesComponent from "../../components/ContructorComponents/SelectServicesComponent";

const Wrapper = styled.div`
  width: 100%;
  max-width: 698px;
  gap: 20px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
`

const WrapperStyled = styled(WrapperComponent)`
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
`

function SelectView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <WrapperStyled title={t("constructor.work_time.title")}>
                <WorktimeComponent/>
            </WrapperStyled>
            <WrapperStyled title={t("constructor.select_location.title")}>
                <SelectLocationComponent/>
            </WrapperStyled>
            <WrapperStyled title={t("constructor.select_services.title")}>
                <SelectServicesComponent/>
            </WrapperStyled>
        </Wrapper>
    );
}

export default SelectView;