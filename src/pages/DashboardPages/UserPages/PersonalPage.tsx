import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {CardComponent, TableListComponent} from "../../../components/UserComponents";
import {Button, EButtonVariants} from "../../../UI/Button";
import {PlusIcon} from "../../../UI/Svg";
import {useAppAction} from "../../../store/app/hooks";
import {EModals} from "../../../store/app/types";

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

function PersonalPage() {
    const {t} = useTranslation()
    const {onShowModal} = useAppAction()
    return (
        <CardComponent title={t("user.personal.title")}
                       headerChildren={
                           <ButtonStyled
                               onClick={() => onShowModal(EModals.AddEmployee)}
                               variant={EButtonVariants.Default}><PlusIcon/>{t('user.personal.button')}
                           </ButtonStyled>
                       }
        >
            <TableListComponent/>
        </CardComponent>
    );
}

export default PersonalPage;