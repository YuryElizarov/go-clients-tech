import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {SearchComponent, SettingComponent} from "./index";
import {Button, EButtonVariants} from "../../UI/Button";
import {PlusIcon} from "../../UI/Svg";
import {useAppAction} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
  }
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
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    padding: 6px 8px;
  }
`
function FiltersComponent() {
    const {onShowModal} = useAppAction()
    const {t} = useTranslation()
    return (
        <Wrapper>
            <SearchComponent/>
            <SettingComponent/>
            <ButtonStyled
                onClick={() => onShowModal(EModals.NewEvent)}
                variant={EButtonVariants.Default}><PlusIcon/>{t('calendar.button')}
            </ButtonStyled>
        </Wrapper>
    );
}

export default FiltersComponent;