import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Dropdown} from "../../UI/Dropdown";
import {Button, EButtonVariants} from "../../UI/Button";
import {PlusIcon} from "../../UI/Svg";
import {useAppAction} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll}{
    gap: 7px;
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
    padding: 7px 8px;
    font-size: 12px;
  }
`

const optsFilters: Array<{ item: string, value: string }> = [
    {item: "Status - 0", value: '0'},
    {item: "Status - 1", value: '1'},
    {item: "Status - 2", value: '2'},
]

function WaitlistFilterComponent() {
    const {onShowModal} = useAppAction()
    const {t} = useTranslation()
    const [status, setStatus] = useState<string>('');

    return (
        <Wrapper>
            <Dropdown isShowOnlyPlaceholder={false} value={status} placeholder={t('waitlist.filters.select')}
                      onSelect={v => setStatus(v)} options={optsFilters} label=""/>
            <ButtonStyled onClick={() => onShowModal(EModals.NewWaitlist)}
                          variant={EButtonVariants.Default}><PlusIcon/>{t('waitlist.filters.button')}</ButtonStyled>
        </Wrapper>
    );
}

export default WaitlistFilterComponent;