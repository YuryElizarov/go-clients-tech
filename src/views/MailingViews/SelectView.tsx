import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {CardComponent, LocationsComponents} from "../../components/UserComponents";
import {Button, EButtonVariants} from "../../UI/Button";
import {PlusIcon} from "../../UI/Svg";
import FiltersComponent from "../../components/MailingComponents/FiltersComponent";
import MailingComponent from "../../components/MailingComponents/MailingComponent";
import {MailingFiltersComponent} from "../../components/MailingComponents";

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  align-content: flex-start;
`
const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  border-radius: 5px;

  svg {
    path {
      stroke: ${({theme}) => theme.colors.white}
    }
  }
`
function SelectView() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <CardComponent title={t("mailing.create.location.title")}
                           headerChildren={
                               <ButtonStyled
                                   variant={EButtonVariants.Default}><PlusIcon/>{t('mailing.create.location.button')}
                               </ButtonStyled>
                           }
            >
                <LocationsComponents/>
            </CardComponent>
            <CardComponent title={t("mailing.select_mailing.title")}
                           headerChildren={
                               <FiltersComponent />
                           }
            >
                <MailingFiltersComponent/>
                <MailingComponent />
                <MailingComponent />
                <MailingComponent />
                <MailingComponent />
                <MailingComponent />
            </CardComponent>
        </Wrapper>
    );
}

export default SelectView;