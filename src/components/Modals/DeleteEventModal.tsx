import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {useAppState} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import {Button, EButtonVariants} from "../../UI/Button";
import {Heading} from "../../UI/Heading";
import {DeleteIcon} from "../../UI/Svg";


const Content = styled.div`
  padding: 20px;
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
    gap: 16px;
  }
`

const ButtonStyled = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  gap: 7px;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 12px 16px;
    font-size: 16px;
    gap: 6px;
  }
`

const HeadingStyled = styled(Heading)`
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 20px;
  }
`

const InfoBlock = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  gap: 15px;
  svg {
    min-width: 24px;
    height: 24px;
  }
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
    svg {
      min-width: 20px;
      height: 20px;
    }
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 7px;
  }
`
const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${({theme}) => theme.colors.darkGrey};
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 1px;
  }
`

const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 8px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 7px;
  }
`

function SendModal() {
    const {t} = useTranslation()
    const {modals} = useAppState()

    if (!modals[EModals.DeleteEvent]) return null;
    return (
        <Modal modal={EModals.DeleteEvent}>
            <Content>
                <InfoBlock>
                    <DeleteIcon/>
                    <Info>
                        <HeadingStyled as="h3">{t("calendar.delete_event.title")}</HeadingStyled>
                        <Text>{t("calendar.delete_event.text")}</Text>
                    </Info>
                </InfoBlock>
                <Buttons>
                    <ButtonStyled variant={EButtonVariants.Text}>{t("calendar.delete_event.buttons.cancel")}</ButtonStyled>
                    <ButtonStyled variant={EButtonVariants.Default}>{t("calendar.delete_event.buttons.send")}</ButtonStyled>
                </Buttons>
            </Content>
        </Modal>
    );
}

export default SendModal;