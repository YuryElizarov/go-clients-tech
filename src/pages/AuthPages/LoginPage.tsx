import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {
    BlockUnderInput,
    ButtonStyled,
    FooterLink,
    FooterLinkRight,
    FooterLinks,
    ForgotLink,
    Form,
    FormWrapper,
    WrapperNav
} from "./styled";
import {LogoFullIcon} from "../../UI/Svg";
import Heading from "../../UI/Heading/Heading";
import InputComponent from "../../components/AuthComponents/InputComponent";
import {EButtonVariants} from "../../UI/Button";

interface FormValues {
    email: string,
    password: string
}

function LoginPage() {
    const {t} = useTranslation()
    const {register, formState: {errors, isValid}, watch} = useForm<FormValues>({
        mode: "onChange",
    })

    const navigate = useNavigate()

    const data = watch();

    return (
        <>
            <WrapperNav>
                <LogoFullIcon/>
            </WrapperNav>
            <FormWrapper>
                <Form>
                    <Heading as="h2">{t("auth.login.title")}</Heading>
                    <InputComponent
                        placeholder={t("auth.login.email")}
                        inputType='email'
                        val={data.email}
                        errorMessage={errors.email}
                        register={register('email', {
                            required: true,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: t("auth.login.email_error")
                            }
                        })}
                    />
                    <InputComponent
                        placeholder={t("auth.login.password")}
                        inputType='password'
                        val={data.password}
                        errorMessage={errors.password}
                        register={register('password', {
                            required: true,
                            minLength: {
                                value: 8,
                                message: t("auth.login.password_error")
                            },
                        })}
                    >
                        <BlockUnderInput><ForgotLink to="/auth/login">
                            {t("auth.login.forgot")}
                        </ForgotLink></BlockUnderInput>
                    </InputComponent>
                </Form>
                <ButtonStyled onClick={() => navigate('/auth/2factor')} variant={EButtonVariants.Default}
                              disabled={!isValid}>
                    {t("auth.login.sign_in_button")}
                </ButtonStyled>
            </FormWrapper>
            <FooterLinks>
                <FooterLink to="/auth/login">{t("auth.login.account")}</FooterLink>
                <FooterLinkRight to="/auth/login">{t("auth.login.sign_up")}</FooterLinkRight>
            </FooterLinks>
        </>
    );
}

export default LoginPage;