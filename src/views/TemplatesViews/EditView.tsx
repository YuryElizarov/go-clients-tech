import React, {useState} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Button, EButtonVariants} from "../../UI/Button";
import {EyeIcon} from "../../UI/Svg";
import {Heading} from "../../UI/Heading";
import {Input} from "../../UI/Input";
import {Tabs} from "../../UI/Tabs";
import {EmailFormComponent} from "../../components/TemplatesComponents";
import SmsFormComponent from "../../components/TemplatesComponents/SmsFormComponent";
import {useAppAction} from "../../store/app/hooks";
import {EModals} from "../../store/app/types";

const Wrapper = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors.background};
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 5px;
  padding: 0;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
`

const HeadingStyled = styled(Heading)`
  font-size: 24px;
  line-height: 100%;
`

const ButtonStyled = styled(Button)`
  padding: 8px 10px;
  font-size: 16px;
  line-height: 100%;
  width: fit-content;
  border-radius: 5px;
  svg {
    width: 16px;
    height: 16px;
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  gap: 8px;
`

const FooterButtons = styled(Buttons)`
  width: 100%;
  padding: 20px;
`
const ButtonFooter = styled(Button)`
  padding: 15px 20px;
  font-size: 20px;
  line-height: 100%;
  width: fit-content;
  ${({theme}) => theme.mediaQueries.ll} {
    font-size: 16px;
    padding: 12px 16px;
  }
`

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 20px;
  padding: 0 20px;
`

const TabsStyled = styled(Tabs)`
  gap: 20px;
`

function EditView() {
    const {t} = useTranslation()
    const {onShowModal} = useAppAction()
    const [data, setData] = useState<{
        title: string,
        theme: string,
        logotype: string,
        patient: string,
        location: string,
        company: string,
        content: string,
        isEmail: boolean,
        isSms: boolean,
    }>({
        isEmail: true,
        isSms: true,
        content: '',
        title: '',
        theme: '',
        logotype: '',
        patient: '',
        location: '',
        company: '',
    });

    const onChange = (key: string, val: any) => {
        setData(prevState => ({
            ...prevState,
            [key]: val
        }))
    }
    return (
        <Wrapper>
            <Header>
                <HeadingStyled as="h3">{t("templates.action.edit.title")}</HeadingStyled>
                <Buttons>
                    <ButtonStyled onClick={() => onShowModal(EModals.Preview)} variant={EButtonVariants.Gray}><EyeIcon/>{t('templates.action.edit.buttons.preview')}
                    </ButtonStyled>
                    <ButtonStyled
                        variant={EButtonVariants.Default}>{t('templates.action.edit.buttons.send', {count: 123})}
                    </ButtonStyled>
                </Buttons>
            </Header>
            <Form>
                <Input value={data.title} onChange={val => onChange('title', val)} id="title"
                       label={t("templates.action.edit.labels.title") as string}/>
                <TabsStyled headers={[
                    <>{t("templates.action.edit.tabs.email")}</>,
                    <>{t("templates.action.edit.tabs.sms")}</>,
                ]}
                            contents={[
                                <EmailFormComponent theme={data.theme}
                                                    logotype={data.logotype}
                                                    content={data.content}
                                                    patient={data.patient}
                                                    location={data.location}
                                                    company={data.company}
                                                    isEmail={data.isEmail} onChange={onChange}/>,
                                <SmsFormComponent theme={data.theme}
                                                  logotype={data.logotype}
                                                  content={data.content}
                                                  patient={data.patient}
                                                  location={data.location}
                                                  company={data.company}
                                                  isSms={data.isSms} onChange={onChange}/>,
                            ]}
                />
            </Form>
            <FooterButtons>
                <ButtonFooter variant={EButtonVariants.Text}>{t('templates.action.edit.buttons.channel')}
                </ButtonFooter>
                <ButtonFooter variant={EButtonVariants.Default}>{t('templates.action.edit.buttons.save')}
                </ButtonFooter>
            </FooterButtons>
        </Wrapper>
    );
}

export default EditView;