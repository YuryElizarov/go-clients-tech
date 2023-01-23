import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {useAppState} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";
import {Modal} from "../../UI/Modal";
import {Button, EButtonVariants} from "../../UI/Button";
import {LogoFullIcon} from "../../UI/Svg";
import {Tabs} from "../../UI/Tabs";
import SmsComponent from "../TemplatesComponents/SmsComponent";


const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 16px;
  }
`

const Content = styled.div`
  width: 988px;
  display: flex;
  min-height: 560px;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  gap: 50px;
  padding: 60px;
  ${({theme}) => theme.mediaQueries.ll} {
    padding: 58px;
    gap: 40px;
  }
`

const SmsContent = styled(Content)`
  align-items: center;
`

const ContentMessage = styled.div`
  width: 100%;

  h1, h2, h3, h4 {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    color: ${({theme}) => theme.colors.black};
    margin: 0;
    margin-bottom: 30px;
    ${({theme}) => theme.mediaQueries.ll}{
      font-size: 22px;
    }
  }

  p {
    margin: 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    margin-bottom: 16px;
    color: ${({theme}) => theme.colors.black};
    ${({theme}) => theme.mediaQueries.ll} {
      font-size: 16px;
    }

    span {
      font-weight: 700;
    }
  }
`

const ButtonStyled = styled(Button)`
  width: fit-content;
  font-size: 16px;
  line-height: 100%;
  padding: 8px 10px;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 12px;
    padding: 6px 8px;
  }
`

const TabsStyled = styled(Tabs)`
  gap: 20px;
  ${({theme}) => theme.mediaQueries.ll} {
    gap: 16px;
  }
`

const ModalStyled = styled(Modal)`
  & > div {
    & > div:nth-child(2) {
      border-bottom: none;
      padding-bottom: 0;

      h3 {
        margin-bottom: 0;
      }
    }
  }
`

function PreviewModal() {
    const {t} = useTranslation()
    const {modals} = useAppState()

    if (!modals[EModals.Preview]) return null;
    return (
        <ModalStyled modal={EModals.Preview} title={t("templates.action.preview.title", {title: "1 day reminder"})}
                     titleChildren={<ButtonStyled
                         variant={EButtonVariants.Default}>{t("templates.action.preview.send", {count: 123})}</ButtonStyled>}
        >
            <Wrapper>
                <TabsStyled headers={[
                    <>{t("templates.action.edit.tabs.email")}</>,
                    <>{t("templates.action.edit.tabs.sms")}</>,
                ]} contents={[
                    <Content>
                        <LogoFullIcon/>
                        <ContentMessage>
                            <h3>Time for your follow-up Dentist Clinic on Chaikovskogo st. 48</h3>
                            <p>Hi, <span>Alex</span>, i am with the team at <span>Dentist Clinic on Chaikovskogo st. 48</span> office!</p>
                               <p> Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за
                                профессионализм, спокойствие, чуткий подход к детям. Очень аккуратные лор-осмотры,
                                четкие объяснения, никаких лишних назначений. Отдельное спасибо за ответы на все
                                "мамские" вопросы (и по несколько раз :)…</p>
                                <p>Прежде всего, хочу поблагодарить нашего доктора Андрея Сергеевича Макарина-Кибака за
                                профессионализм, спокойствие, чуткий подход к детям. Очень </p>
                        </ContentMessage>
                    </Content>,
                    <SmsContent>
                        <SmsComponent/>
                    </SmsContent>
                ]}/>
            </Wrapper>
        </ModalStyled>
    );
}

export default PreviewModal;