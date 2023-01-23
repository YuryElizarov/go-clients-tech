import React, {useEffect, useMemo} from 'react';
import {useForm} from "react-hook-form";
import {useTimer} from "react-timer-hook";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {
    BlockUnderInput, Breadcrumb,
    ButtonStyled,
    FooterLink,
    FooterLinkRight,
    FooterLinks,
    FormFA,
    FormWrapper, Timer, TitleBlock,
    WrapperNav
} from "./styled";
import {ChevronIcon, LogoFullIcon} from "../../UI/Svg";
import Heading from "../../UI/Heading/Heading";
import InputComponent from "../../components/AuthComponents/InputComponent";
import {EButtonVariants} from "../../UI/Button";
import {addZeroForward} from "../../utils";
import {Text} from "../../UI/Text";

interface FormValues {
    code: string
}

function FAPage() {

    const {t} = useTranslation()

    const {register, formState: {isValid}, watch} = useForm<FormValues>({
        mode: "onChange",
    })
    const data = watch();
    const time = useMemo(() => {
        const now = new Date().getTime()
        return new Date(now + 60 * 1000)
    }, [])

    const {
        seconds,
        restart,
    } = useTimer({
        expiryTimestamp: time, autoStart: true
    });

    useEffect(() => {
        restart(time, true)
    }, [time])

    const navigate = useNavigate()

    return (
        <>
            <WrapperNav>
                <LogoFullIcon/>
            </WrapperNav>
            <FormWrapper>
                <Breadcrumb to="/auth/login">
                    <ChevronIcon/>
                    <Text>{t("auth.fa.breadcrumb")}</Text>
                </Breadcrumb>
                <FormFA>
                    <TitleBlock>
                        <Heading as="h2">{t("auth.fa.title")}</Heading>
                        <Text>{t("auth.fa.header_text")}</Text>
                    </TitleBlock>
                    <InputComponent
                        placeholder='Type two-factor authentication code here'
                        inputType='text'
                        val={data.code}
                        register={register('code', {
                            required: true,
                            minLength: 4
                        })
                        }
                    >
                        <BlockUnderInput><Timer>00:{addZeroForward(seconds.toString())} {t("auth.fa.timer")}</Timer></BlockUnderInput>
                    </InputComponent>
                </FormFA>
                <ButtonStyled onClick={() => navigate('/')} variant={EButtonVariants.Default} disabled={!isValid}>
                    {t("auth.fa.button")}
                </ButtonStyled>
            </FormWrapper>
            <FooterLinks>
                <FooterLink to="/auth/2factor">{t("auth.fa.account")}</FooterLink>
                <FooterLinkRight to="/auth/2factor">{t("auth.fa.backup")}</FooterLinkRight>
            </FooterLinks>
        </>
    );
}

export default FAPage;