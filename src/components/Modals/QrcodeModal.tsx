import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {useAppState} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import {Button, EButtonVariants} from "../../UI/Button";
import {LinkSecondIcon} from "../../UI/Svg";
import {Input} from "../../UI/Input";


const Content = styled.div`
  padding: 20px;
  width: 635px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 0;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  border-radius: 5px;
  gap: 7px;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 6px 8px;
    font-size: 12px;
    gap: 6px;
  }
`

const QrcodeImage = styled.img`
  width: 220px;
  height: 220px;
  margin-top: 40px;
  margin-bottom: 60px;
`


function QrcodeModal() {
    const {t} = useTranslation()
    const {modals} = useAppState()
    const [val, setVal] = useState<string>('');

    if (!modals[EModals.Qrcode]) return null;
    return (
        <Modal modal={EModals.Qrcode} title={t("forms.modals.qrcode.title")}
               titleChildren={<ButtonStyled variant={EButtonVariants.Default}><LinkSecondIcon/> {t('forms.modals.qrcode.button')}</ButtonStyled>}
        >
            <Content>
                <QrcodeImage src="/images/qrcode.png"/>
                <Input value={val} onChange={v => setVal(v)} id="title"
                       label={t("forms.modals.qrcode.input") as string}/>
            </Content>
        </Modal>
    );
}

export default QrcodeModal;