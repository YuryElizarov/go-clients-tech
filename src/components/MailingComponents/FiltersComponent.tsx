import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Button, EButtonVariants} from "../../UI/Button";
import {PlusIcon} from "../../UI/Svg";
import Download from "../../UI/Svg/icons/Download";
import {CheckBox} from "../../UI/Input";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 6px;
  }
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  border-radius: 5px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 6px 8px;
    font-size: 12px;
  }
`
function FiltersComponent() {
    const [isAll, setIsAll] = useState<boolean>(false);
    const {t} = useTranslation()
    return (
        <Wrapper>
            <CheckBox value={isAll} onChange={() => setIsAll(!isAll)} id="mailing-all" label={t('mailing.select_mailing.filters.all')}/>
            <ButtonStyled
                variant={EButtonVariants.Gray}><Download/>{t('mailing.select_mailing.filters.upload')}
            </ButtonStyled>
            <ButtonStyled
                variant={EButtonVariants.Default}><PlusIcon/>{t('mailing.select_mailing.filters.add')}
            </ButtonStyled>
        </Wrapper>
    );
}

export default FiltersComponent;