import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {useAppState} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import {Button, EButtonVariants} from "../../UI/Button";
import {Heading} from "../../UI/Heading";
import {MessageIcon} from "../../UI/Svg";


const Content = styled.div`
  padding: 20px;
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll}{
    padding: 16px;
    gap: 16px;
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
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 12px;
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
  ${({theme}) => theme.mediaQueries.ll}{
    font-size: 12px;
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

    if (!modals[EModals.Send]) return null;
    return (
        <Modal modal={EModals.Send}>
            <Content>
                <InfoBlock>
                    <MessageIcon/>
                    <Info>
                        <HeadingStyled as="h3">{t("templates.action.send.title")}</HeadingStyled>
                        <Text>{t("templates.action.send.text")}</Text>
                    </Info>
                </InfoBlock>
                <Buttons>
                    <ButtonStyled variant={EButtonVariants.Text}>{t("templates.action.send.buttons.cancel")}</ButtonStyled>
                    <ButtonStyled variant={EButtonVariants.Default}>{t("templates.action.send.buttons.send")}</ButtonStyled>
                </Buttons>
            </Content>
        </Modal>
    );
}

export default SendModal;